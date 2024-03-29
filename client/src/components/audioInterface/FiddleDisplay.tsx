import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';

import { PauseButton } from '../buttons/PauseButton';
import { PlayButton } from '../buttons/PlayButton';
import { RecordButton } from '../buttons/RecordButton';

const Waveform = styled.div<{
  ref: RefObject<HTMLDivElement>;
}>`
  width: 90vw;
  height: 21.875rem;
  margin-bottom: 1.25rem;
`;

const PlayRecord = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

export function FiddleDisplay({ audioFileUrl, onClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();
  const waveformRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
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
        barHeight: 10,
        height: 350,
        interact: true,
        maxCanvasWidth: 2000
      });
      wavesurfer.load(audioFileUrl);
      wavesurfer.on('finish', function() {
        wavesurfer.stop();
        setIsPlaying(false);
      });
      setWaveSurfer(wavesurfer);
    }
  }, [audioFileUrl, waveformRef]);

  function handlePlay() {
    waveSurfer && waveSurfer.play();
    setIsPlaying(true);
  }

  function handlePause() {
    waveSurfer && waveSurfer.pause();
    setIsPlaying(false);
  }

  return (
    <>
      <Waveform ref={waveformRef} />
      {!isPlaying && (
        <PlayRecord>
          <PlayButton onClick={handlePlay} />
          <RecordButton onClick={onClick} />
        </PlayRecord>
      )}
      {isPlaying && <PauseButton onClick={handlePause} />}
    </>
  );
}
