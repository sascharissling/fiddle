import React from 'react';
import UIfx from 'uifx';
import incoming from '../../assets/incoming_message.mp3';

const notification = new UIfx(incoming, {
  volume: 0.3,
  throttleMs: 100
});

export default function useGetChatMessages(_id) {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('send-chat-id', _id);
    socket.on('chat-messages', data => {
      setChatMessages(data.messages);
    });
    socket.on('new-chat-message', message => {
      setChatMessages(messages => [...messages, message]);
      notification.play();
    });
  }, [_id]);

  return chatMessages;
}
