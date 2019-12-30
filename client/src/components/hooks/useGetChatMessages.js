import React from 'react';
import { getChatMessages } from '../../api/chats';

export default function useGetChatMessages(_id) {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      getChatMessages(_id).then(fetchedChatMessages => {
        setChatMessages(fetchedChatMessages);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [_id]);

  return chatMessages;
}
