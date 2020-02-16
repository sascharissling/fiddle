import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';
import PropTypes from 'prop-types';

const AudioMessage = styled.div`
  background: ${props => props.theme.themeGradient};
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 0px 5px 0px;
  padding: 8px;
  width: 200px;
  cursor: pointer;
`;

export default function ChatWaveFormDisplay({ audioFileUrl }) {
  const activeWaveColor = '#f5f5f5';
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 1,
        cursorWidth: 0,
        waveColor: activeWaveColor,
        hideScrollbar: true,
        interact: false,
        fillParent: true,
        autoCenter: true,
        barHeight: 12,
        height: 15,
        responsive: true
      });
      wavesurfer.load(audioFileUrl);
      wavesurfer.on('ready', function() {
        wavesurfer.unAll();
      });
    }
  }, [audioFileUrl]);

  return <AudioMessage data-test-id="audio-message" ref={waveformRef}></AudioMessage>;
}

ChatWaveFormDisplay.propTypes = {
  audioFileUrl: PropTypes.string
};
