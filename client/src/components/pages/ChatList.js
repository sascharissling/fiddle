import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import useGetUserChats from '../hooks/useGetUserChats';
import { fadeIn } from '../../utils/animations';
import ChatListItem from '../layout/ChatListItem';
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';
import PageHeadline from '../headlines/PageHeadline';
import HeadlineBar from '../layout/HeadlineBar';
import NewChatButton from '../buttons/NewChatButton';
import WelcomeUser from '../headlines/WelcomeUser';
import FiddleSmallLogo from '../branding/FiddleSmallLogo';
import { LoadingLine } from '../misc/LoadingLine';
import DefaultUserAvatar from '../icons/DefaultUserAvatar.svg';

const LoadingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation: ${fadeIn} 0.1s;
`;

const ChatListPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.1s;
`;
const Chats = styled.div`
  flex-grow: 1;
  margin: 0px 20px 0px 20px;
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

function toLocaleTime(date) {
  const newDate = new Date(date);
  const localTime = newDate.toLocaleTimeString();
  const shortTime = localTime.replace(/:\d+ /, ' ');
  return shortTime.slice(0, 5);
}

export default function ChatList() {
  const [loadingDone, setLoadingDone] = React.useState(false);
  const userName = sessionStorage.getItem('userName');
  const userChats = useGetUserChats(userName);
  const sortedUserChats = userChats.sort(function(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  React.useEffect(() => {
    setTimeout(() => {
      setLoadingDone(true);
    }, 900);
  }, []);

  return (
    <>
      {!loadingDone && (
        <LoadingPage>
          <WelcomeUser userName={`${sessionStorage.getItem('userName')}`} />
          <LoadingLine />
          <FiddleSmallLogo />
        </LoadingPage>
      )}

      {loadingDone && (
        <ChatListPage>
          <HeaderBar>
            <Link to={'/login'}>
              <BackButton data-test-id="back-to-login" />
            </Link>
            <Link to={'/chats/new'}>
              <NewChatButton />
            </Link>
          </HeaderBar>
          <HeadlineBar>
            <PageHeadline headline={'Chats'} />
          </HeadlineBar>
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
        </ChatListPage>
      )}
    </>
  );
}
