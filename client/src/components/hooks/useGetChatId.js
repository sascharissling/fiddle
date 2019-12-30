import React from 'react';
import { getChatId } from '../../api/chats';

export default function useGetChatId(user1, user2) {
  const [chatId, setChatId] = React.useState('');

  React.useEffect(() => {
    getChatId(user1, user2).then(fetchedChatId => {
      setChatId(fetchedChatId);
    });
  }, [user1, user2]);

  return chatId;
}
