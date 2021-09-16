import React from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import { PlayButton } from '../buttons/PlayButton';
import { PauseButton } from '../buttons/PauseButton';
import { RecordButton } from '../buttons/RecordButton';

const Waveform = styled.div`
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
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [waveSurfer, setWaveSurfer] = React.useState();
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
  }, [audioFileUrl]);

  function handlePlay() {
    waveSurfer.play();
    setIsPlaying(true);
  }

  function handlePause() {
    waveSurfer.pause();
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
