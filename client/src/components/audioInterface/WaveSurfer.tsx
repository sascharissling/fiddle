import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';

const Waveform = styled.div<{
  ref: HTMLDivElement;
}>`
  height: 21.875rem;
  align-items: center;
`;

//WIP - One Component to delete all other instances

export function WafeSurfer({ audioFileUrl, waveColor, progressColor, onStop, onPlay, onPause }) {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();
  const waveformRef = useRef<HTMLDivElement>();

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
    waveSurfer && waveSurfer.play();
    onPlay();
  }

  function handlePause() {
    waveSurfer && waveSurfer.pause();
    onPause();
  }
  return <Waveform ref={waveformRef} />;
}
