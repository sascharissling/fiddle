import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import useGetChatMessages from '../hooks/useGetChatMessages';
import useGetChatInformation from '../hooks/useGetChatInformation';
import useScrollIntoView from '../hooks/useScrollIntoView';
import PropTypes from 'prop-types';
import { fadeIn } from '../../utils/animations';

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
import { LoadingLineChat } from '../misc/LoadingLine';

//STYLE start
const ChatPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.05s;
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

function pickPartnerName(userName, userName1, userName2) {
  const partner = userName === userName1 ? userName2 : userName1;
  return partner;
}

export default function Chat(props) {
  const chatId = props.match.params.id;
  const chatInformation = useGetChatInformation(chatId);
  const userName = localStorage.getItem('userName');
  const partnerName = pickPartnerName(
    userName,
    chatInformation.userName1,
    chatInformation.userName2
  );
  const messages = useGetChatMessages(chatId);
  const chatHistoryRef = React.useRef();

  useScrollIntoView(chatHistoryRef, messages);

  return (
    <ChatPage>
      <HeaderBar>
        <Link to={'/chatslist'}>
          <BackButton />
        </Link>
      </HeaderBar>
      <HeadlineBar>
        <PageHeadline headline={partnerName} />
      </HeadlineBar>
      <LoadingLineChat />
      <ChatHistory>
        {messages.map(message => {
          if (message.author !== partnerName && message.type === 'text') {
            return <OutgoingMessage key={message._id} outgoingText={message.body} />;
          }
          if (message.author === partnerName && message.type === 'text') {
            return <IncomingMessage key={message._id} incomingText={message.body} />;
          }
          if (message.author !== partnerName && message.type === 'audio') {
            return (
              <Link key={message._id} to={`/chats/${chatId}/playback/${message.body.slice(47)}`}>
                <OutgoingAudio audioFileUrl={message.body} />
              </Link>
            );
          }
          if (message.author === partnerName && message.type === 'audio') {
            return (
              <Link key={message._id} to={`/chats/${chatId}/playback/${message.body.slice(47)}`}>
                <IncomingAudio audioFileUrl={message.body} />
              </Link>
            );
          }
          return null;
        })}
        <div ref={chatHistoryRef} />
      </ChatHistory>
      <FooterBar>
        <MessageInput chatId={chatId} author={localStorage.getItem('userName')} />
        <Link to={`/chats/${chatId}/record`}>
          <FiddleButton />
        </Link>
      </FooterBar>
    </ChatPage>
  );
}

Chat.propTypes = {
  match: PropTypes.object
};
