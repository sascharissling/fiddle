import styled from 'styled-components';
import { ProxyButton } from './ProxyButton';

const Discard = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  text-align: center;
  color: ${props => props.theme.secondary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default function DiscardAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <Discard>discard</Discard>
    </ProxyButton>
  );
}
