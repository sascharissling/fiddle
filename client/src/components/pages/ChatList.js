import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//COMPONENTS imports
import ChatListItem from '../layout/ChatListItem';
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';
import PageHeadline from '../headlines/PageHeadline';
import HeadlineBar from '../layout/HeadlineBar';
import NewChatButton from '../buttons/NewChatButton';

//SVG imports
import DefaultUser0 from '../icons/DefaultUser0.svg';
import DefaultUser1 from '../icons/DefaultUser1.svg';
import DefaultUser2 from '../icons/DefaultUser2.svg';

//STYLE start
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
`;

const ChatLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
//STYLE end

export default function ChatList() {
  const [userChats, setUserChats] = React.useState([]);
  const userName = localStorage.getItem('userName');

  async function getUserChats() {
    const data = await fetch(`/api/userChats/${userName}`, {
      method: 'GET'
    });
    const items = await data.json();
    setUserChats(items);
  }
  console.log(userChats);

  React.useEffect(() => {
    getUserChats();
    // eslint-disable-next-line
  }, []);

  function pickLastArrayItem(array) {
    const item = array[array.length - 1];
    return item;
  }

  function pickPartnerName(userName, user1, user2) {
    if (userName === user1) {
      return user2;
    } else {
      return user1;
    }
  }

  function turnToLocaleTimeString(date) {
    const time = date.toString();
    return time;
  }

  var avatars = [DefaultUser0, DefaultUser1, DefaultUser2];
  function randomUserAvatar(avatars) {
    return avatars[Math.floor(Math.random() * avatars.length)];
  }

  return (
    <ChatListPage>
      <HeaderBar>
        <Link to={'/login'}>
          <BackButton />
        </Link>
        <NewChatButton />
      </HeaderBar>
      <HeadlineBar>
        <PageHeadline headline={'Chats'} />
      </HeadlineBar>
      <Chats>
        {userChats.map(chat => (
          <ChatLink key={chat._id} to={`/chat/${chat._id}`}>
            <ChatListItem
              key={chat._id}
              userImgSrc={randomUserAvatar(avatars)}
              partnerName={pickPartnerName(userName, chat.user1, chat.user2)}
              lastMessage={pickLastArrayItem(chat.messages).body}
              lastMessageDate={turnToLocaleTimeString(pickLastArrayItem(chat.messages).date).slice(
                11,
                16
              )}
            />
          </ChatLink>
        ))}
      </Chats>
    </ChatListPage>
  );
}
