import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { changeWidth, changeWidthLong } from '../../utils/animations';

const base = props => css`
  height: 4px;
  width: 0px;
  background: ${props.theme.themeGradient};
  border-radius: 15px;
  margin: 2px;
`;

export const LoadingLine = styled.div`
  ${base};
  animation: ${changeWidth} 2s ease-out 1;
`;

export const LoadingLineLong = styled(LoadingLine)`
  animation: ${changeWidthLong} 2.2s ease-out 1;
`;
