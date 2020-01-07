import React from 'react';
import styled from '@emotion/styled';

//Components imports
import ProxyButton from './ProxyButton';

//STYLE start

const Send = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: ${props => props.theme.tertiary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

//STYLE end

export default function SendAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <Send>send</Send>
    </ProxyButton>
  );
}
