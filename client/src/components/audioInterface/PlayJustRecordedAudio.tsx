import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { AudioInterfaceWrapper } from './AudioInterfaceWrapper';
import { FiddleDisplay } from './FiddleDisplay';
import { FileHandling } from './FileHandling';

export function PlayJustRecordedAudio({ chatId, audioFileUrl, handleDelete, handleSend }) {
  const [redirectToOverdub, setRedirectToOverdub] = useState(false);
  return (
    <>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioFileUrl} onClick={() => setRedirectToOverdub(true)} />
        {redirectToOverdub && (
          <Redirect to={`/chats/${chatId}/overdub/${audioFileUrl.slice(47)}`} />
        )}
        <FileHandling handleDelete={handleDelete} handleSend={handleSend} />
      </AudioInterfaceWrapper>
    </>
  );
}
