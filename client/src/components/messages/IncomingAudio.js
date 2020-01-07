import React from 'react';

//COMPONENTS imports
import MessageWrapperIn from './MessageWrapperIn';
import ChatWaveFormDisplay from './ChatWaveFormDisplay';

export default function IncomingAudio({ onClick, audioFileUrl }) {
  return (
    <MessageWrapperIn onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperIn>
  );
}
