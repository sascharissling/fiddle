import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import useGetChatMessages from '../hooks/useGetChatMessages';
import useGetChatInformation from '../hooks/useGetChatInformation';
import PropTypes from 'prop-types';

//COMPONENTS imports
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';
import PageHeadline from '../headlines/PageHeadline';
import HeadlineBar from '../layout/HeadlineBar';
import MessageInput from '../inputs/MessageInput';
import FooterBar from '../layout/FooterBar';
import FiddleButton from '../buttons/FiddleButton';
import IncomingMessage from '../messages/IncomingMessage';
import IncomingAudio from '../messages/IncomingAudio';
import OutgoingMessage from '../messages/OutgoingMessage';
import OutgoingAudio from '../messages/OutgoingAudio';
import { LoadingLineLong } from '../misc/LoadingLine';

//STYLE start
const ChatPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`;

const ChatHistory = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  overflow-y: scroll;
  flex-grow: 1;
  flex-basis: 0;
`;

//STYLE end

export default function Chat(props) {
  const chatId = props.match.params.id;
  const userName = localStorage.getItem('userName');
  const chatInformation = useGetChatInformation(chatId);
  const messages = useGetChatMessages(chatId);
  const chatHistoryRef = React.useRef();

  React.useEffect(() => {
    chatHistoryRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [chatHistoryRef, messages.length]);

  function pickPartnerName(userName, user1, user2) {
    if (userName === user1) {
      return user2;
    } else {
      return user1;
    }
  }

  return (
    <ChatPage>
      <HeaderBar>
        <Link to={`/chatlist?userName=${localStorage.getItem('userName')}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <HeadlineBar>
        <PageHeadline
          headline={pickPartnerName(userName, chatInformation.user1, chatInformation.user2)}
        />
      </HeadlineBar>
      <LoadingLineLong />
      <ChatHistory>
        {messages.map(message => {
          if (
            message.author !==
              pickPartnerName(userName, chatInformation.user1, chatInformation.user2) &&
            message.type === 'text'
          ) {
            return <OutgoingMessage key={message._id} outgoingText={message.body} />;
          }
          if (
            message.author ===
              pickPartnerName(userName, chatInformation.user1, chatInformation.user2) &&
            message.type === 'text'
          ) {
            return <IncomingMessage key={message._id} incomingText={message.body} />;
          }
          if (
            message.author !==
              pickPartnerName(userName, chatInformation.user1, chatInformation.user2) &&
            message.type === 'audio'
          ) {
            return (
              <Link key={message._id} to={`/playAudio/${chatId}/${message.body.slice(47)}`}>
                <OutgoingAudio audioFileUrl={message.body} />
              </Link>
            );
          }
          if (
            message.author ===
              pickPartnerName(userName, chatInformation.user1, chatInformation.user2) &&
            message.type === 'audio'
          ) {
            return (
              <Link key={message._id} to={`/playAudio/${chatId}/${message.body.slice(47)}`}>
                <IncomingAudio audioFileUrl={message.body} />
              </Link>
            );
          } else {
            return null;
          }
        })}
        <div ref={chatHistoryRef} />
      </ChatHistory>
      <FooterBar>
        <MessageInput chatId={chatId} author={localStorage.getItem('userName')} />
        <Link to={`/recordNewAudio/${chatId}/userName=${localStorage.getItem('userName')}`}>
          <FiddleButton />
        </Link>
      </FooterBar>
    </ChatPage>
  );
}

Chat.propTypes = {
  match: PropTypes.object
};
