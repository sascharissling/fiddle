import React from 'react';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiddleDisplay } from '../audioInterface/FiddleDisplay';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { PageFrame } from './PageFrame';

type PlayAudioProps = {
  match: {
    params: {
      id: string;
      fileName: string;
    };
  };
};

export function PlayAudio({ match }: PlayAudioProps) {
  const [redirectToOverdub, setRedirectToOverdub] = useState(false);
  const chatId = match.params.id;
  const fileName = match.params.fileName;
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

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
        <FiddleDisplay audioFileUrl={audioUrl} onClick={() => setRedirectToOverdub(true)} />
        {redirectToOverdub && <Redirect to={`/chats/${chatId}/overdub/${fileName}`} />}
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}
