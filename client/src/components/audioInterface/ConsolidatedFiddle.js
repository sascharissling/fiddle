import React from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import PropTypes from 'prop-types';
import PlayButton from '../buttons/PlayButton';
import PauseButton from '../buttons/PauseButton';

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
const Waveform = styled.div`
  height: 21.875rem;
  align-items: center;
`;

const PlayRecord = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

export default function ConsolidatedFiddle({ audioFileUrl }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [waveSurfer, setWaveSurfer] = React.useState();
  const waveformRef = React.useRef();

  React.useEffect(() => {
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
        width: 100,
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
    waveSurfer.play();
    setIsPlaying(true);
  }

  function handlePause() {
    waveSurfer.pause();
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

ConsolidatedFiddle.propTypes = {
  audioFileUrl: PropTypes.string
};
