import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//COMPONENTS imports
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import FiddleDisplay from '../audioInterface/FiddleDisplay';
import FileHandling from '../audioInterface/FileHandling';

export default function PlayJustRecordedAudio({ chatId, audioFileUrl, handleDelete, handleSend }) {
  const [redirectToOverdub, setRedirectToOverdub] = React.useState(false);
  return (
    <>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioFileUrl} onClick={() => setRedirectToOverdub(true)} />
        {redirectToOverdub && <Redirect to={`/overdubAudio/${chatId}/${audioFileUrl.slice(47)}`} />}
        <FileHandling handleDelete={handleDelete} handleSend={handleSend} />
      </AudioInterfaceWrapper>
    </>
  );
}

PlayJustRecordedAudio.propTypes = {
  audioFileUrl: PropTypes.string,
  match: PropTypes.string,
  chatId: PropTypes.string
};
