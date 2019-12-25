import React from 'react';
import styled from '@emotion/styled';

const RecordFiddleCTA = styled.h3`
  font-size: 25px;
  font-style: bold;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

export default function NoAudioYet() {
  return <RecordFiddleCTA>record a fiddle</RecordFiddleCTA>;
}
