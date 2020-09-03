import React from 'react';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import PropTypes from 'prop-types';
import TextMessage from './Message';

const AudioMessage = styled.div`
  ${TextMessage}
  background: ${props => props.theme.themeGradient};
  width: 12.5rem;
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

  return <AudioMessage ref={waveformRef}></AudioMessage>;
}

ChatWaveFormDisplay.propTypes = {
  audioFileUrl: PropTypes.string
};
