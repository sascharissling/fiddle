import React from 'react';
import { getChatMessages } from '../../api/chats';

export default function useGetChatMessages(_id) {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    getChatMessages(_id).then(fetchedChatMessages => {
      setChatMessages(fetchedChatMessages);
    });
  }, [_id]);

  return chatMessages;
}
