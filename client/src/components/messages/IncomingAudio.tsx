import React from 'react';
import PropTypes from 'prop-types';

import MessageWrapperIn from './MessageWrapperIn';
import ChatWaveFormDisplay from './ChatWaveFormDisplay';

type IncomingAudioProps = {
  onClick: () => void,
  audioFileUrl: string
};

export function IncomingAudio({ onClick, audioFileUrl }: IncomingAudioProps) {
  return (
    <MessageWrapperIn onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperIn>
  );
}
