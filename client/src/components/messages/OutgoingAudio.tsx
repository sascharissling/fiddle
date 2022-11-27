import React from 'react';
import { MessageWrapperOut } from './MessageWrapperOut';
import { ChatWaveFormDisplay } from './ChatWaveFormDisplay';

type OutgoingAudioProps = {
  audioFileUrl: string;
};

export function OutgoingAudio({ audioFileUrl }: OutgoingAudioProps) {
  return (
    <MessageWrapperOut>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperOut>
  );
}
