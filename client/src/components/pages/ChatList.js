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
const Chats = styled.div`
  flex-grow: 1;
  margin: 0px 20px 0px 20px;
  overflow: auto;
`;
//STYLE end

export default function ChatList() {
  const [userChats, setUserChats] = React.useState([]);
  const userName = localStorage.getItem('userName');

  async function getUserChats() {
    const data = await fetch(`http://localhost:8080/chats/userChats/${userName}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
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
      <Chats>
        <ChatListItem />
      </Chats>
    </ChatListPage>
  );
}
