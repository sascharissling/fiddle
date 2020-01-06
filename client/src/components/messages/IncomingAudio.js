import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';

//COMPONENTS imports
import MessageWrapperIn from './MessageWrapperIn';

//STYLE start
const IncomingAudioMessage = styled.div`
  background: ${props => props.theme.themeGradient};
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 0px 5px 20px;
  padding: 8px;
  width: 200px;
  cursor: pointer;
`;
//STYLE end

export default function IncomingAudio({ onClick, audioFileUrl }) {
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
        autoCenter: true,
        barHeight: 15,
        height: 15,
        responsive: true
      });
      wavesurfer.load(audioFileUrl);
      wavesurfer.on('ready', function() {
        wavesurfer.unAll();
      });
    }
  }, [audioFileUrl]);

  return (
    <MessageWrapperIn onClick={onClick}>
      <IncomingAudioMessage ref={waveformRef}></IncomingAudioMessage>
    </MessageWrapperIn>
  );
}
