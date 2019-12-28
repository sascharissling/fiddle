import React from 'react';
import { getChatInformation } from '../../api/chats';

export default function useGetChatInformation(_id) {
  const [chatInformation, setChatInformation] = React.useState([]);

  React.useEffect(() => {
    getChatInformation(_id).then(fetchedChatInformation => {
      setChatInformation(fetchedChatInformation);
    });
  }, [_id]);

  return chatInformation;
}
