import React from 'react';
import styled from '@emotion/styled';
import { changeWidthLong } from '../../utils/animations';

const Line = styled.div`
  height: 4px;
  width: 0px;
  animation: ${changeWidthLong} 2.5s ease-out 1;
  background: ${props => props.theme.themeGradient};
  border-radius: 15px;
  margin: 2px;
`;

export default function LoadingLineLong() {
  return <Line />;
}
