import React from 'react';
import styled from '@emotion/styled';
import { changeWidth } from '../utils/animations';

const Line = styled.div`
  height: 5px;
  width: 20px;
  animation: ${changeWidth} 1.5s ease-out 1;
  background: ${props => props.theme.themeGradient};
  border-radius: 15px;
`;

export default function LoadingLine() {
  return <Line />;
}
