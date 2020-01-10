import React from 'react';
import { getChatMessages } from '../../api/chats';

export default function useGetChatMessages(_id) {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    const io = require('socket.io-client');
    const socket = io('http://localhost:9090');
    socket.emit('send-chat-id', _id);
    socket.on('chat-messages', data => {
      setChatMessages(data.messages);
    });
  }, [_id]);

  return chatMessages;
}

// export default function useGetChatMessages(_id) {
//   const [chatMessages, setChatMessages] = React.useState([]);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       getChatMessages(_id).then(fetchedChatMessages => {
//         setChatMessages(fetchedChatMessages);
//       });
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [_id]);

//   return chatMessages;
// }
