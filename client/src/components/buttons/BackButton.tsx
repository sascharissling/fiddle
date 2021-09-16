import React from 'react';
import styled from 'styled-components';
import { ProxyButton } from './ProxyButton';

const BackArrow = styled.path`
  fill: ${props => props.theme.primary};
`;

export function BackButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8.537"
        height="18.165"
        viewBox="0 0 8.537 18.165"
      >
        <BackArrow
          d="M16.177,19.156a.809.809,0,0,1,0,1.034.578.578,0,0,1-.9,0L8.013,11.838a.809.809,0,0,1,0-1.034l7.265-8.352a.579.579,0,0,1,.9,0,.809.809,0,0,1,0,1.034L9.551,11.321l6.626,7.834Z"
          transform="translate(-7.826 -2.239)"
        />
      </svg>
    </ProxyButton>
  );
}
