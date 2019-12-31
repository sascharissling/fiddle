import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';

//STYLE start
const Waveform = styled.div`
  width: 90vw;
  height: 350px;
  flex-grow: 1;
`;
//STYLE end

export default function RecordNewFiddle() {
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
      wavesurfer.microphone.start();
    }
  }, []);
  return <Waveform ref={waveformRef} />;
}
