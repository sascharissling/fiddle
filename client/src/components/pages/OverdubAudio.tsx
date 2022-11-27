import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { OverdubFiddle } from '../audioInterface/OverdubFiddle';
import { PageFrame } from './PageFrame';

type OverdubAudioProps = {
  match: {
    params: {
      id: string;
      originalFileName: string;
    };
  };
};

export function OverdubAudio({ match }: OverdubAudioProps) {
  const chatId = match.params.id;
  const fileName = match.params.originalFileName;
  const audioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  return (
    <PageFrame>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <OverdubFiddle originalAudioFileUrl={audioFileUrl} chatId={chatId} />
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}
