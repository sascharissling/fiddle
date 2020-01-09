import React from 'react';
import { action } from '@storybook/addon-actions';

//COMPONENTS imports
import FiddleButton from '../components/buttons/FiddleButton';
import IncomingMessage from '../components/messages/IncomingMessage';
import OutgoingMessage from '../components/messages/OutgoingMessage';
import IncomingAudio from '../components/messages/IncomingAudio';
import OutgoingAudio from '../components/messages/OutgoingAudio';
import ChatListItem from '../components/layout/ChatListItem';

export default {
  title: 'Chat Objects'
};

//Button leads to where a new audio file can be recorded
export function ChatList() {
  return (
    <ChatListItem
      onClick={action('clicked')}
      partnerName={'Friend'}
      lastMessage={'This is it I think'}
      lastMessageDate={'00:12'}
    />
  );
}

export function GoFiddle() {
  return <FiddleButton onClick={action('clicked')} />;
}

export function TextIncoming() {
  return <IncomingMessage incomingText={'Hello rocker'} />;
}

export function TextOutgoing() {
  return <OutgoingMessage outgoingText={'Hello axegrinder'} />;
}

export function AudioIncoming() {
  return <IncomingAudio onClick={action('clicked')} />;
}

export function AudioOutgoing() {
  return <OutgoingAudio onClick={action('clicked')} />;
}
