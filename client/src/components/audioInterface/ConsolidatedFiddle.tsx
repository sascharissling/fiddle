import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';

import { PauseButton } from '../buttons/PauseButton';
import { PlayButton } from '../buttons/PlayButton';

const ConsolidatedContainer = styled.div`
  background: ${props => props.theme.themeGradient};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  border-radius: 1rem;
  padding: 0.625rem;
  width: 90vw;
  margin-bottom: 1.25rem;
`;

const Waveform = styled.div<{
  ref: RefObject<HTMLDivElement>;
}>`
  height: 21.875rem;
  align-items: center;
`;

const PlayRecord = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

type Props = {
  audioFileUrl: string;
};

export function ConsolidatedFiddle({ audioFileUrl }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();
  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 5,
        cursorWidth: 2,
        waveColor: '#f5f5f5',
        progressColor: '#707070',
        hideScrollbar: true,
        autoCenter: true,
        responsive: true,
        height: 350,
        barHeight: 10,
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
  }, [audioFileUrl]);
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
      <ConsolidatedContainer>
        <Waveform ref={waveformRef} />
      </ConsolidatedContainer>
      {!isPlaying && (
        <PlayRecord>
          <PlayButton onClick={handlePlay} />
        </PlayRecord>
      )}
      {isPlaying && <PauseButton onClick={handlePause} />}
    </>
  );
}
