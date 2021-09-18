import { SetStateAction, useEffect, useState } from 'react';
import { ChatInformation } from '../../utils/types';

export function useGetChatInformation(_id: string) {
  const [chatInformation, setChatInformation] = useState<ChatInformation>();

  useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('send-chat-id-for-info', _id);
    socket.on('chat-info', (data: SetStateAction<ChatInformation | undefined>) => {
      setChatInformation(data);
    });
  }, [_id]);

  return chatInformation;
}
