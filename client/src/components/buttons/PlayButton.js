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

export default function PlayButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
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
          id="Polygon_1"
          data-name="Polygon 1"
          d="M14,0,28,24H0Z"
          transform="translate(24) rotate(90)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </ProxyButton>
  );
}
