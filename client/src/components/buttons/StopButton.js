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

export default function StopButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
        <rect
          id="Rectangle_84"
          data-name="Rectangle 84"
          width="24"
          height="24"
          fill="url(#linear-gradient)"
        />
      </svg>
    </ProxyButton>
  );
}