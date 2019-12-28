import React from 'react';
import { getUserChats } from '../../api/chats';

export default function useGetUserChats(userName) {
  const [userChats, setUserChats] = React.useState([]);

  React.useEffect(() => {
    getUserChats(userName).then(fetchedUserChats => {
      setUserChats(fetchedUserChats);
    });
    // eslint-disable-next-line
  }, []);

  return userChats;
}
