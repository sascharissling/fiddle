import { useEffect, useState } from 'react';

export function useGetChatInformation(_id) {
  const [chatInformation, setChatInformation] = useState([]);

  useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('send-chat-id-for-info', _id);
    socket.on('chat-info', data => {
      setChatInformation(data);
    });
  }, [_id]);

  return chatInformation;
}
