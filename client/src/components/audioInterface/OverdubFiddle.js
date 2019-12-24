import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';

//COMPONENTS imports
import FiddleDisplay from './FiddleDisplay';

//STYLE start
const Waveform = styled.div`
  width: 90vw;
  height: 360px;
  position: relative;
  z-index: 1;
  flex-grow: 1;
  border-radius: 15px;
`;
//STYLE end

export default function OverdubFiddle() {
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const activeWaveColor = '#EA4F87';
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        barHeight: 9,
        cursorWidth: 2,
        waveColor: activeWaveColor,
        hideScrollbar: true,
        autoCenter: true,
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
      wavesurfer.microphone.start();
      setTimeout(function() {
        wavesurfer.microphone.stopDevice();
      }, 5000);
    }
  }, []);
  return (
    <>
      <FiddleDisplay />
      <Waveform ref={waveformRef} />
    </>
  );
}
