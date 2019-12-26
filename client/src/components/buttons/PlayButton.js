import React from 'react';

//Components imports
import ProxyButton from './ProxyButton';

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
            <stop offset="0" stopColor="#EA4F87" />
            <stop offset="1" stopColor="#f37a6a" />
          </linearGradient>
        </defs>
        <path
          d="M14,0,28,24H0Z"
          transform="translate(24) rotate(90)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </ProxyButton>
  );
}
