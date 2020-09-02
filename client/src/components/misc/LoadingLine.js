import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { changeWidth, changeWidthLong } from '../../utils/animations';

const base = props => css`
  height: 0.25rem;
  width: 0;
  background: ${props.theme.themeGradient};
  border-radius: 1rem;
  margin: 0.125rem;
`;

export const LoadingLine = styled.div`
  ${base};
  animation: ${changeWidth} 2s ease-out 1;
`;

export const LoadingLineLong = styled(LoadingLine)`
  animation: ${changeWidthLong} 2.2s ease-out 1;
`;

export const LoadingLineChat = styled(LoadingLine)`
  animation: ${changeWidthLong} 0.3s ease-out 1;
`;
