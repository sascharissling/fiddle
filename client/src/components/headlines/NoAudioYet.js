import React from 'react';
import styled from '@emotion/styled';

//STYLE start

const RecordFiddleCTA = styled.h3`
  font-size: 25px;
  font-style: bold;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

const NoAudioYetWrapper = styled.div`
  height: 350px;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

//STYLE end

export default function NoAudioYet() {
  return (
    <NoAudioYetWrapper>
      <RecordFiddleCTA>record a fiddle</RecordFiddleCTA>
    </NoAudioYetWrapper>
  );
}
