import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import useGetUserChats from '../hooks/useGetUserChats';

//COMPONENTS imports
import ChatListItem from '../layout/ChatListItem';
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';
import PageHeadline from '../headlines/PageHeadline';
import HeadlineBar from '../layout/HeadlineBar';
import NewChatButton from '../buttons/NewChatButton';
import WelcomeUser from '../headlines/WelcomeUser';
import FiddleSmallLogo from '../branding/FiddleSmallLogo';
import { LoadingLine } from '../misc/LoadingLine';

//SVG imports
import DefaultUser0 from '../icons/DefaultUser0.svg';
import DefaultUser1 from '../icons/DefaultUser1.svg';
import DefaultUser2 from '../icons/DefaultUser2.svg';

//STYLE start

const LoadingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const ChatListPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
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
//STYLE end

export default function ChatList() {
  const [loadingDone, setLoadingDone] = React.useState(false);
  const userName = localStorage.getItem('userName');
  const userChats = useGetUserChats(userName);
  const reversedChats = userChats.reverse();
  const avatars = [DefaultUser0, DefaultUser1, DefaultUser2];

  React.useEffect(() => {
    setTimeout(() => {
      setLoadingDone(true);
    }, 1450);
  }, []);

  function pickPartnerName(userName, user1, user2) {
    const partner = userName === user1 ? user2 : user1;
    return partner;
  }

  return (
    <>
      {!loadingDone && (
        <LoadingPage>
          <WelcomeUser userName={`${localStorage.getItem('userName')}`} />
          <LoadingLine />
          {loadingDone && (
            <Redirect to={`/chatlist?userName=${localStorage.getItem('userName')}`} />
          )}
          <FiddleSmallLogo />
        </LoadingPage>
      )}

      {loadingDone && (
        <ChatListPage>
          <HeaderBar>
            <Link to={'/login'}>
              <BackButton />
            </Link>
            <Link to={`/newChat/?userName=${localStorage.getItem('userName')}`}>
              <NewChatButton />
            </Link>
          </HeaderBar>
          <HeadlineBar>
            <PageHeadline headline={'Chats'} />
          </HeadlineBar>
          <Chats>
            {reversedChats.map(chat => (
              <ChatLink key={chat._id} to={`/chat/${chat._id}`}>
                <ChatListItem
                  partnerName={pickPartnerName(userName, chat.user1, chat.user2)}
                  userImgSrc={avatars[Math.floor(Math.random() * avatars.length)]}
                  lastMessage={chat.messages[chat.messages.length - 1].body}
                  lastMessageDate={chat.messages[chat.messages.length - 1].date.slice(11, 16)}
                />
              </ChatLink>
            ))}
          </Chats>
        </ChatListPage>
      )}
    </>
  );
}
