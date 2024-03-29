import styled from 'styled-components';
import { HeaderBaseStyle } from './HeaderBar';

export const HeadlineBar = styled.div`
  ${HeaderBaseStyle}
  flex-flow: column nowrap;
  background: ${props => props.theme.background};
  justify-content: flex-start;
  align-items: flex-start;
`;
