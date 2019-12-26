import React from 'react';

//Components imports
import ProxyButton from './ProxyButton';

export default function RecordButton({ onClick }) {
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
            <stop offset="0" stopColor="#EA4F87" />
            <stop offset="1" stopColor="#f37a6a" />
          </linearGradient>
        </defs>
        <g transform="translate(-274 -532)">
          <circle
            cx="12"
            cy="12"
            r="12"
            transform="translate(274 532)"
            fill="url(#linear-gradient)"
          />
        </g>
      </svg>
    </ProxyButton>
  );
}
