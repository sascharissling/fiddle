import React from 'react';
import styled from '@emotion/styled';
import { ReactMic } from 'react-mic';
import PropTypes from 'prop-types';

//COMPONENTS imports
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import NoAudioYet from '../headlines/NoAudioYet';
import { LoadingLineLong } from '../misc/LoadingLine';
import RecordNewFiddle from '../audioInterface/RecordNewFiddle';
import RecordButton from '../buttons/RecordButton';
import StopButton from '../buttons/StopButton';

//STYLE start
const Mic = styled(ReactMic)`
  opacity: 0;
  height: 0;
  width: 0;
`;
//STYLE end

export default function InitialAudioRecording({ handleStop }) {
  const [noAudioYet, setNoAudioYet] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  function startRecording() {
    setNoAudioYet(false);
    setIsRecording(true);
  }

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function stopRecording() {
    setIsRecording(false);
    setIsProcessing(true);
  }

  return (
    <AudioInterfaceWrapper>
      {noAudioYet && (
        <>
          <NoAudioYet systemMessage={'record a fiddle.'} />
        </>
      )}
      {!noAudioYet && (
        <>
          <Mic record={isRecording} onStop={handleStop} onData={handleData} mimeType="audio/webm" />
          {isProcessing && <LoadingLineLong />}
          {!isProcessing && <RecordNewFiddle />}
        </>
      )}
      {isRecording && <StopButton onClick={stopRecording} />}
      {!isRecording && !isProcessing && <RecordButton onClick={startRecording} />}
    </AudioInterfaceWrapper>
  );
}

InitialAudioRecording.propTypes = {
  handleStop: PropTypes.func
};
