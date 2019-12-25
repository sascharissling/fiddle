import styled from '@emotion/styled';
import { buttonFeedback } from '../../utils/animations';

const ProxyButton = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    animation: ${buttonFeedback} 0.1s ease-out 1;
  }
`;

export default ProxyButton;
