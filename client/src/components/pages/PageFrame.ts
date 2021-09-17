import styled from 'styled-components';
import { fadeIn } from '../../utils/animations';

export const PageFrame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.1s;
`;
