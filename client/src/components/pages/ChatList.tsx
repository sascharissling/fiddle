import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetUserChats } from '../hooks/useGetUserChats';
import { fadeIn } from '../../utils/animations';
import { ChatListItem } from '../layout/ChatListItem';
import { BackButton } from '../buttons/BackButton';
import { HeaderBar } from '../layout/HeaderBar';
import { HeadlineBar } from '../layout/HeadlineBar';
import { NewChatButton } from '../buttons/NewChatButton';
import DefaultUserAvatar from '../icons/DefaultUserAvatar.svg';

const ChatListPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.1s;
`;
const Chats = styled.div`
  flex-grow: 1;
  margin: 0 1.25rem;
  overflow: auto;
  flex-basis: 0;
`;

const ChatLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function pickPartnerName(userName, userName1, userName2) {
  const partner = userName === userName1 ? userName2 : userName1;
  return partner;
}

function toLocaleTime(date: Date) {
  const newDate = new Date(date);
  const localTime = newDate.toLocaleTimeString();
  const shortTime = localTime.replace(/:\d+ /, ' ');
  return shortTime.slice(0, 5);
}

export function ChatList() {
  const userName = sessionStorage.getItem('userName');
  const userChats = useGetUserChats(userName ?? '');
  const sortedUserChats =
    userChats !== null
      ? userChats.sort(function(a, b) {
          return b.updatedAt.getTime() - a.updatedAt.getTime();
        })
      : null;

  return (
    <ChatListPage>
      <HeaderBar
        items={[
          {
            link: '/login',
            icon: <BackButton />
          },
          {
            link: '/chats/new',
            icon: <NewChatButton />
          }
        ]}
      />
      <HeadlineBar>
        <h1>Chats</h1>
      </HeadlineBar>
      {sortedUserChats && (
        <Chats>
          {sortedUserChats.map(chat => (
            <ChatLink key={chat._id} to={`/chats/${chat._id}`}>
              <ChatListItem
                partnerName={pickPartnerName(userName, chat.userName1, chat.userName2)}
                userImgSrc={DefaultUserAvatar}
                lastMessage={chat.messages[chat.messages.length - 1].body}
                lastMessageDate={toLocaleTime(chat.updatedAt)}
              />
            </ChatLink>
          ))}
        </Chats>
      )}
    </ChatListPage>
  );
}
