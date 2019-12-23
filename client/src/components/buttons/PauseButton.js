import React from 'react';
import styled from '@emotion/styled';

//Components imports
import ProxyButton from './ProxyButton';

//STYLED start
const Stop1 = styled.stop`
  stop-color: ${props => props.theme.primary};
`;

const Stop2 = styled.stop`
  stop-color: ${props => props.theme.primary2};
`;
//STYLED end

export default function PauseButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="22.4" viewBox="0 0 19.2 22.4">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <Stop1 offset="0" />
            <Stop2 offset="1" />
          </linearGradient>
        </defs>
        <path
          id="controller-paus"
          d="M24,4.8H20.8c-.885,0-1.6.077-1.6.96V26.24c0,.883.715.96,1.6.96H24c.885,0,1.6-.077,1.6-.96V5.76C25.6,4.877,24.885,4.8,24,4.8Zm-12.8,0H8c-.885,0-1.6.077-1.6.96V26.24c0,.883.715.96,1.6.96h3.2c.885,0,1.6-.077,1.6-.96V5.76C12.8,4.877,12.085,4.8,11.2,4.8Z"
          transform="translate(-6.4 -4.8)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </ProxyButton>
  );
}
