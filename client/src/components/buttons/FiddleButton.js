import React from 'react';
import styled from '@emotion/styled';

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
            <stop offset="0" stop-color="#EA4F87" />
            <stop offset="1" stop-color="#f37a6a" />
          </linearGradient>
        </defs>
        <g id="Group_32" data-name="Group 32" transform="translate(-272.5 -532)">
          <path
            id="Path_1318"
            data-name="Path 1318"
            d="M0,5"
            transform="translate(272.5 541.5)"
            fill="none"
            stroke="#f5f5f5"
            stroke-width="1"
          />
          <g id="Group_6" data-name="Group 6" transform="translate(-1)">
            <circle
              id="Ellipse_5"
              data-name="Ellipse 5"
              cx="12"
              cy="12"
              r="12"
              transform="translate(274 532)"
              fill="url(#linear-gradient)"
            />
          </g>
          <g id="Group_37" data-name="Group 37">
            <line
              id="Line_116"
              data-name="Line 116"
              y2="5"
              transform="translate(280.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_111"
              data-name="Line 111"
              y2="5"
              transform="translate(284.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_112"
              data-name="Line 112"
              y2="5"
              transform="translate(288.5 541.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_113"
              data-name="Line 113"
              y2="14"
              transform="translate(286.5 536.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_114"
              data-name="Line 114"
              y2="11"
              transform="translate(282.5 538.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_117"
              data-name="Line 117"
              y2="7"
              transform="translate(278.5 540.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
            <line
              id="Line_115"
              data-name="Line 115"
              y2="7"
              transform="translate(290.5 540.5)"
              fill="none"
              stroke="#f5f5f5"
              stroke-width="1"
            />
          </g>
        </g>
      </svg>
    </ProxyButton>
  );
}
