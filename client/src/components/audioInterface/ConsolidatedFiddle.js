import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';

//STYLE start
const Waveform = styled.div`
  align-items: center;
  width: 90vw;
  height: 350px;
  background: ${props => props.theme.themeGradient};
  border-radius: 15px;
  padding: 10px;
`;
//STYLE end

export default function ConsolidatedFiddle() {
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
        autoCenter: true,
        responsive: true,
        width: 100,
        barHeight: 9,
        height: 340,
        interact: true,
        maxCanvasWidth: 2000,
        fillParent: true
      });
      wavesurfer.load('/assets/audio2.wav');
      wavesurfer.on('ready', function() {
        wavesurfer.play();
      });
    }
  }, []);
  return <Waveform ref={waveformRef} />;
}
