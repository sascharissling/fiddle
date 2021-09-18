import { SetStateAction, useEffect, useState } from 'react';
import UIfx from 'uifx';
import { Message } from '../../utils/types';

const incoming = require('../../assets/incoming_message.mp3');

const notification = new UIfx(incoming, {
  volume: 0.3,
  throttleMs: 100
});

export function useGetChatMessages(_id: string) {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  useEffect(() => {
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    const userName = sessionStorage.getItem('userName');
    socket.emit('send-chat-id', _id);
    socket.on('chat-messages', (data: { messages: SetStateAction<Message[]> }) => {
      setChatMessages(data.messages);
    });
    socket.on('new-chat-message', (message: Message) => {
      setChatMessages(messages => [...messages, message]);
      if (message.author !== userName) {
        notification.play();
      }
    });
  }, [_id]);

  return chatMessages;
}
