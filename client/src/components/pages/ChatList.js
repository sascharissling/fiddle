import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//COMPONENTS imports
import ChatListItem from '../layout/ChatListItem';
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';
import PageHeadline from '../headlines/PageHeadline';
import HeadlineBar from '../layout/HeadlineBar';

//STYLE start
const ChatListPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
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

  return (
    <ChatListPage>
      <HeaderBar>
        <Link to={'/login'}>
          <BackButton />
        </Link>
      </HeaderBar>
      <HeadlineBar>
        <PageHeadline headline={'Chats'} />
      </HeadlineBar>
      <ChatListItem />
    </ChatListPage>
  );
}
