import React from 'react';
import styled from '@emotion/styled';
import WaveSurfer from 'wavesurfer.js';

//COMPONENTS imports
import MessageWrapperOut from './MessageWrapperOut';
import ProxyButton from '../buttons/ProxyButton';

//STYLE start
const OutgoingAudioMessage = styled.div`
  background: ${props => props.theme.themeGradient};
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 20px 5px 0px;
  padding: 8px;
  width: 200px;
  cursor: pointer;
`;
//STYLE end

export default function OutgoingAudio({ onClick }) {
  const activeWaveColor = '#f5f5f5';
  const waveformRef = React.useRef();

  React.useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        barWidth: 1,
        interact: false,
        waveColor: activeWaveColor,
        hideScrollbar: true,
        autoCenter: true,
        barHeight: 15,
        height: 15,
        responsive: true
      });
      wavesurfer.load('/assets/audio1.wav');
    }
  }, []);

  return (
    <MessageWrapperOut>
      <ProxyButton onClick={onClick}>
        <OutgoingAudioMessage ref={waveformRef}></OutgoingAudioMessage>
      </ProxyButton>
    </MessageWrapperOut>
  );
}
