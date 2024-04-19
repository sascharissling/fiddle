import React, { useEffect, useRef, useState, RefObject, MutableRefObject } from 'react';
// import { ReactMic } from 'react-mic';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
// import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';

import { getThemeGradient } from '../../utils/getThemeGradient';
import { RecordButton } from '../buttons/RecordButton';
import { StopButton } from '../buttons/StopButton';
import { NoAudioYet } from '../headlines/NoAudioYet';
import { LoadingLineLong } from '../misc/LoadingLine';
import { AudioInterfaceWrapper } from './AudioInterfaceWrapper';

// const Mic = styled(ReactMic)`
//   opacity: 0;
//   height: 0;
//   width: 0;
// `;

const Waveform = styled.div<{
  showWavesurfer: boolean;
  ref: RefObject<HTMLDivElement>;
}>`
  width: 90vw;
  height: 21.875rem;
  margin-bottom: 1.25rem;
  display: ${props => (props.showWavesurfer ? 'block ' : 'none')};
`;

export function InitialAudioRecording({ handleStop }) {
  const [noAudioYet, setNoAudioYet] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();
  const [showWavesurfer, setShowWavesurfer] = useState(false);
  const waveformRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
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
        // responsive: true,
        interact: false,

        height: 350,
        // maxCanvasWidth: 2000,
        fillParent: true
        // plugins: [MicrophonePlugin.create()]
      });
      // wavesurfer.microphone.on('deviceReady', function(stream) {
      //   console.log('Device ready!', stream);
      // });
      // wavesurfer.microphone.on('deviceError', function(code) {
      //   console.warn('Device error: ' + code);
      // });
      setWaveSurfer(wavesurfer);
    }
  }, [waveformRef]);

  function startRecording() {
    // waveSurfer && waveSurfer.microphone.start();
    setShowWavesurfer(true);
    setNoAudioYet(false);
    setIsRecording(true);
  }

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function stopRecording() {
    // waveSurfer && waveSurfer.microphone.stop();
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
          {/*<Mic record={isRecording} onStop={handleStop} onData={handleData} mimeType="audio/webm" />*/}
          {isProcessing && <LoadingLineLong />}
        </>
      )}
      <Waveform showWavesurfer={showWavesurfer} ref={waveformRef} />
      {isRecording && <StopButton onClick={stopRecording} />}
      {!isRecording && !isProcessing && <RecordButton onClick={startRecording} />}
    </AudioInterfaceWrapper>
  );
}
