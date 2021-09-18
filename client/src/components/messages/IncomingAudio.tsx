import React from 'react';
import PropTypes from 'prop-types';

import { MessageWrapperIn } from './MessageWrapperIn';
import { ChatWaveFormDisplay } from './ChatWaveFormDisplay';

type IncomingAudioProps = {
  audioFileUrl: string;
};

export function IncomingAudio({ audioFileUrl }: IncomingAudioProps) {
  return (
    <MessageWrapperIn>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperIn>
  );
}
