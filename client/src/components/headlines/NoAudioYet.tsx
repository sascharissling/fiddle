import React from 'react';
import styled from 'styled-components';

const SystemMessage = styled.h3`
  font-size: 1.5rem;
  font-style: bold;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

const NoAudioYetWrapper = styled.div`
  height: 21.875rem;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export function NoAudioYet({ systemMessage }) {
  return (
    <NoAudioYetWrapper>
      <SystemMessage>{systemMessage}</SystemMessage>
    </NoAudioYetWrapper>
  );
}
