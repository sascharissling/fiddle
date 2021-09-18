import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetChatMessages } from '../hooks/useGetChatMessages';
import { useGetChatInformation } from '../hooks/useGetChatInformation';
import { useScrollIntoView } from '../hooks/useScrollIntoView';
import { BackButton } from '../buttons/BackButton';
import { HeaderBar } from '../layout/HeaderBar';
import { PageHeadline } from '../headlines/PageHeadline';
import { HeadlineBar } from '../layout/HeadlineBar';
import { MessageInput } from '../inputs/MessageInput';
import { FooterBar } from '../layout/FooterBar';
import { FiddleButton } from '../buttons/FiddleButton';
import { IncomingMessage } from '../messages/IncomingMessage';
import { IncomingAudio } from '../messages/IncomingAudio';
import { OutgoingMessage } from '../messages/OutgoingMessage';
import { OutgoingAudio } from '../messages/OutgoingAudio';
import { PageFrame } from './PageFrame';
import { LoadingLineChat } from '../misc/LoadingLine';
import { useRef } from 'react';

const ChatHistory = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  overflow-y: scroll;
  flex-grow: 1;
  flex-basis: 0;
`;

function pickPartnerName(userName: string, userName1: string, userName2: string) {
  const partner = userName === userName1 ? userName2 : userName1;
  return partner;
}

type ChatProps = {
  match: {
    params: {
      id: string;
    };
  };
};

export function Chat({ match }: ChatProps) {
  const chatId = match.params.id;
  const chatInformation = useGetChatInformation(chatId);
  const userName = sessionStorage.getItem('userName') ?? '';

  const partnerName =
    chatInformation &&
    pickPartnerName(userName, chatInformation.userName1, chatInformation.userName2);

  const messages = useGetChatMessages(chatId);
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  useScrollIntoView(chatHistoryRef.current, messages);

  return (
    <PageFrame>
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
            return <OutgoingMessage key={message.date} outgoingText={message.body} />;
          }
          if (message.author === partnerName && message.type === 'text') {
            return <IncomingMessage key={message.date} incomingText={message.body} />;
          }
          if (message.author !== partnerName && message.type === 'audio') {
            return (
              <Link key={message.date} to={`/chats/${chatId}/playback/${message.body.slice(47)}`}>
                <OutgoingAudio audioFileUrl={message.body} />
              </Link>
            );
          }
          if (message.author === partnerName && message.type === 'audio') {
            return (
              <Link key={message.date} to={`/chats/${chatId}/playback/${message.body.slice(47)}`}>
                <IncomingAudio audioFileUrl={message.body} />
              </Link>
            );
          }
          return null;
        })}
        <div ref={chatHistoryRef} />
      </ChatHistory>
      <FooterBar>
        <MessageInput chatId={chatId} />
        <Link to={`/chats/${chatId}/record`}>
          <FiddleButton />
        </Link>
      </FooterBar>
    </PageFrame>
  );
}
