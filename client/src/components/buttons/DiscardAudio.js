import React from 'react';
import styled from '@emotion/styled';

//Components imports
import ProxyButton from './ProxyButton';

//STYLE start

const InterfaceButton = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.tertiary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

//STYLE end

export default function DiscardAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <InterfaceButton>discard</InterfaceButton>
    </ProxyButton>
  );
}
