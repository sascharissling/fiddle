import React from 'react';

//Components imports
import ProxyButton from './ProxyButton';

export default function StopButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        gradientUnits="objectBoundingBox"
      >
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1">
            <stop offset="0" stop-color="#EA4F87" />
            <stop offset="1" stop-color="#f37a6a" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" fill="url(#linear-gradient)" />
      </svg>
    </ProxyButton>
  );
}
