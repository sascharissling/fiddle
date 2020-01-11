import React from 'react';

export default function useGetUserChats(userName) {
  const [userChats, setUserChats] = React.useState([]);

  React.useEffect(() => {
    const io = require('socket.io-client');
    const socket = io('http://localhost:9090');
    socket.emit('get-userName', userName);
    socket.on('user-chats', data => {
      setUserChats(data);
    });
  }, [userName]);

  return userChats;
}
