import React from 'react';

export default function useGetChatMessages(_id) {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    const io = require('socket.io-client');
    const socket = io('http://localhost:9090');
    socket.emit('send-chat-id', _id);
    socket.on('chat-messages', data => {
      setChatMessages(data.messages);
    });
    socket.on('new-chat-message', message => {
      setChatMessages(messages => [...messages, message]);
    });
  }, [_id]);

  return chatMessages;
}
