import styled from 'styled-components';
import { ProxyButton } from './ProxyButton';

const Send = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  text-align: center;
  color: ${props => props.theme.tertiary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export function SendAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <Send>send</Send>
    </ProxyButton>
  );
}
