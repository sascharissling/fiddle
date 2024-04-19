import React, { useEffect } from 'react';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

import { AudioInterfaceWrapper } from './AudioInterfaceWrapper';
import { FiddleDisplay } from './FiddleDisplay';
import { FileHandling } from './FileHandling';

export function PlayJustRecordedAudio({ chatId, audioFileUrl, handleDelete, handleSend }) {
  const [redirectToOverdub, setRedirectToOverdub] = useState(false);

  useEffect(() => {
    if (redirectToOverdub) {
      setTimeout(() => redirect(`/chats/${chatId}/overdub/${audioFileUrl.slice(47)}`), 2000);
    }
  }, [redirectToOverdub]);

  return (
    <>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioFileUrl} onClick={() => setRedirectToOverdub(true)} />
        <FileHandling handleDelete={handleDelete} handleSend={handleSend} />
      </AudioInterfaceWrapper>
    </>
  );
}
