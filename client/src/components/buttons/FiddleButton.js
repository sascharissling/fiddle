import React from 'react';
import PropTypes from 'prop-types';

//Components imports
import ProxyButton from './ProxyButton';

export default function FiddleButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="24" viewBox="0 0 24.5 24">
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
        <g transform="translate(-272.5 -532)">
          <path
            d="M0,5"
            transform="translate(272.5 541.5)"
            fill="none"
            stroke="#f5f5f5"
            strokeWidth="1"
          />
          <g transform="translate(-1)">
            <circle
              cx="12"
              cy="12"
              r="12"
              transform="translate(274 532)"
              fill="url(#linear-gradient)"
            />
          </g>
          <g>
            <line
              y2="5"
              transform="translate(280.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="5"
              transform="translate(284.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="5"
              transform="translate(288.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="14"
              transform="translate(286.5 536.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="11"
              transform="translate(282.5 538.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="7"
              transform="translate(278.5 540.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
            <line
              y2="7"
              transform="translate(290.5 540.5)"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    </ProxyButton>
  );
}

FiddleButton.propTypes = {
  onClick: PropTypes.func
};
