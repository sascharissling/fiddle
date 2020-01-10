import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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
import DefaultUserAvatar from '../icons/DefaultUserAvatar.svg';

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

  React.useEffect(() => {
    setTimeout(() => {
      setLoadingDone(true);
    }, 1450);
  }, []);

  function pickPartnerName(userName, userName1, userName2) {
    const partner = userName === userName1 ? userName2 : userName1;
    return partner;
  }

  return (
    <>
      {!loadingDone && (
        <LoadingPage>
          <WelcomeUser userName={`${localStorage.getItem('userName')}`} />
          <LoadingLine />
          <FiddleSmallLogo />
        </LoadingPage>
      )}

      {loadingDone && (
        <ChatListPage>
          <HeaderBar>
            <Link to={'/login'}>
              <BackButton />
            </Link>
            <Link to={'/chats/new'}>
              <NewChatButton />
            </Link>
          </HeaderBar>
          <HeadlineBar>
            <PageHeadline headline={'Chats'} />
          </HeadlineBar>
          <Chats>
            {reversedChats.map(chat => (
              <ChatLink key={chat._id} to={`/chats/${chat._id}`}>
                <ChatListItem
                  partnerName={pickPartnerName(userName, chat.userName1, chat.userName2)}
                  userImgSrc={DefaultUserAvatar}
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
