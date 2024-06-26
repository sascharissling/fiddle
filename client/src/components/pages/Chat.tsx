import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useGetChatMessages } from '../hooks/useGetChatMessages';
import { useGetChatInformation } from '../hooks/useGetChatInformation';
import { useScrollIntoView } from '../hooks/useScrollIntoView';
import { BackButton } from '../buttons/BackButton';
import { HeaderBar } from '../layout/HeaderBar';
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
  return userName === userName1 ? userName2 : userName1;
}

type ChatProps = {
  id: string;
};

export function Chat() {
  const { id: chatId } = useParams<ChatProps>();

  if (!chatId) return null;

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
      <HeaderBar
        items={[
          {
            link: '/chatslist',
            icon: <BackButton />
          }
        ]}
      />
      <HeadlineBar>
        <h1>{partnerName}</h1>
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
