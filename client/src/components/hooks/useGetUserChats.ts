import { SetStateAction, useEffect, useState } from 'react';
import { Chats } from '../../utils/types';

export function useGetUserChats(userName: string) {
  const [userChats, setUserChats] = useState<Chats>([]);

  useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('get-userName', userName);
    socket.on('user-chats', (data: SetStateAction<Chats>) => {
      setUserChats(data);
    });
  }, [userName]);

  return userChats;
}
