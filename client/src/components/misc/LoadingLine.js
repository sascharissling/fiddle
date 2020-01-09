import styled from '@emotion/styled';
import { changeWidth, changeWidthLong } from '../../utils/animations';

export const LoadingLine = styled.div`
  height: 4px;
  width: 0px;
  animation: ${changeWidth} 2s ease-out 1;
  background: ${props => props.theme.themeGradient};
  border-radius: 15px;
  margin: 2px;
`;

export const LoadingLineLong = styled.div`
  height: 4px;
  width: 0px;
  animation: ${changeWidthLong} 2.2s ease-out 1;
  background: ${props => props.theme.themeGradient};
  margin: 0px 20px 0px 20px;
  border-radius: 15px;
  margin: 2px;
`;
