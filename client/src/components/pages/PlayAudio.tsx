import React, { useEffect } from 'react';
import { useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { FiddleDisplay } from '../audioInterface/FiddleDisplay';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { PageFrame } from './PageFrame';

type PlayAudioParams = {
  id: string;
  fileName: string;
};

export function PlayAudio() {
  const [redirectToOverdub, setRedirectToOverdub] = useState(false);
  const { id: chatId, fileName } = useParams<PlayAudioParams>();
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  useEffect(() => {
    if (redirectToOverdub) {
      setTimeout(() => redirect(`/chats/${chatId}/overdub/${fileName}`), 2000);
    }
  }, [redirectToOverdub]);

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
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}
