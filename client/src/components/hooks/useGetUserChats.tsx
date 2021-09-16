import { useEffect, useState } from 'react';

export default function useGetUserChats(userName) {
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('get-userName', userName);
    socket.on('user-chats', data => {
      setUserChats(data);
    });
  }, [userName]);

  return userChats;
}
