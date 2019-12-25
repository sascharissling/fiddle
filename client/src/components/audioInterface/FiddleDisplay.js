import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';

//STYLE start
const Waveform = styled.div`
  width: 90vw;
  height: 350px;
  position: absolute;
  flex-grow: 1;
  z-index: 0;
`;
//STYLE end

export default function FiddleDisplay() {
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const activeWaveColor = '#f5f5f5';
      const playedWaveColor = '#707070';
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        cursorWidth: 2,
        waveColor: activeWaveColor,
        progressColor: playedWaveColor,
        hideScrollbar: true,
        autoCenter: false,
        responsive: true,
        width: 100,
        barHeight: 9,
        height: 350,
        interact: true,
        maxCanvasWidth: 2000,
        fillParent: true
      });
      wavesurfer.load('/assets/audio1.wav');
      wavesurfer.on('ready', function() {
        wavesurfer.play();
      });
    }
  }, []);
  return <Waveform ref={waveformRef} />;
}
