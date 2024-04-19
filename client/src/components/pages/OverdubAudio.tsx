import React from 'react';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { OverdubFiddle } from '../audioInterface/OverdubFiddle';
import { PageFrame } from './PageFrame';
import { useParams } from 'react-router-dom';

type OverdubAudioProps = {
  id: string;
  originalFileName: string;
};

export function OverdubAudio() {
  const { id: chatId, originalFileName } = useParams<OverdubAudioProps>();
  const audioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${originalFileName}`;

  return (
    <PageFrame>
      <HeaderBar
        items={[
          {
            link: `/chats/${chatId}`,
            icon: <BackButton />
          }
        ]}
      />
      <AudioInterfaceWrapper>
        <OverdubFiddle originalAudioFileUrl={audioFileUrl} chatId={chatId} />
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}
