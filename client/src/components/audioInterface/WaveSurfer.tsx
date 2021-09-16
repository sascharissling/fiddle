import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';

const Waveform = styled.div`
  height: 21.875rem;
  align-items: center;
`;

export function WafeSurfer({ audioFileUrl, waveColor, progressColor, onStop, onPlay, onPause }) {
  const [waveSurfer, setWaveSurfer] = useState();
  const waveformRef = useRef();

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        cursorWidth: 2,
        waveColor: waveColor,
        progressColor: progressColor,
        hideScrollbar: true,
        autoCenter: true,
        responsive: true,
        width: 100,
        height: 350,
        barHeight: 10,
        interact: true,
        maxCanvasWidth: 2000
      });
      ws.load(audioFileUrl);
      ws.on('finish', function() {
        ws.stop();
        onStop();
      });
      setWaveSurfer(ws);
    }
  }, [audioFileUrl]);

  function handlePlay() {
    waveSurfer.play();
    onPlay();
  }

  function handlePause() {
    waveSurfer.pause();
    onPause();
  }
  return <Waveform ref={waveformRef} />;
}
