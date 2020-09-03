import React from 'react';
import styled from 'styled-components';
import { ReactMic } from 'react-mic';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';
import getThemeGradient from '../../utils/getThemeGradient';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import NoAudioYet from '../headlines/NoAudioYet';
import { LoadingLineLong } from '../misc/LoadingLine';
import RecordButton from '../buttons/RecordButton';
import StopButton from '../buttons/StopButton';

const Mic = styled(ReactMic)`
  opacity: 0;
  height: 0;
  width: 0;
`;

const Waveform = styled.div`
  width: 90vw;
  height: 21.875rem;
  margin-bottom: 1.25rem;
  display: ${props => (props.showWavesurfer ? 'block ' : 'none')};
`;

export default function InitialAudioRecording({ handleStop }) {
  const [noAudioYet, setNoAudioYet] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [waveSurfer, setWaveSurfer] = React.useState();
  const [showWavesurfer, setShowWavesurfer] = React.useState(false);
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const themeGradient = getThemeGradient();
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        barHeight: 10,
        cursorWidth: 0,
        waveColor: themeGradient,
        hideScrollbar: true,
        autoCenter: false,
        responsive: true,
        interact: false,
        width: 100,
        height: 350,
        maxCanvasWidth: 2000,
        fillParent: true,
        plugins: [MicrophonePlugin.create()]
      });
      wavesurfer.microphone.on('deviceReady', function(stream) {
        console.log('Device ready!', stream);
      });
      wavesurfer.microphone.on('deviceError', function(code) {
        console.warn('Device error: ' + code);
      });
      setWaveSurfer(wavesurfer);
    }
  }, []);

  function startRecording() {
    waveSurfer.microphone.start();
    setShowWavesurfer(true);
    setNoAudioYet(false);
    setIsRecording(true);
  }

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  async function stopRecording() {
    await waveSurfer.microphone.stop();
    setIsRecording(false);
    setIsProcessing(true);
    setShowWavesurfer(false);
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
        </>
      )}
      <Waveform showWavesurfer={showWavesurfer} ref={waveformRef} />
      {isRecording && <StopButton onClick={stopRecording} />}
      {!isRecording && !isProcessing && <RecordButton onClick={startRecording} />}
    </AudioInterfaceWrapper>
  );
}

InitialAudioRecording.propTypes = {
  handleStop: PropTypes.func
};
