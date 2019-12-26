import React from 'react';
import styled from '@emotion/styled';
import { changeWidth } from '../../utils/animations';

const Line = styled.div`
  height: 4px;
  width: 2px;
  animation: ${changeWidth} 2s ease-out 1;
  background: ${props => props.theme.themeGradient};
  border-radius: 15px;
  margin: 2px;
`;

export default function LoadingLine() {
  return <Line />;
}
