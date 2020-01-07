import React from 'react';

//COMPONENTS imports
import MessageWrapperOut from './MessageWrapperOut';
import ChatWaveFormDisplay from './ChatWaveFormDisplay';

export default function OutgoingAudio({ onClick, audioFileUrl }) {
  return (
    <MessageWrapperOut onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperOut>
  );
}
