import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { zoomInOut } from '../../utils/animations';

export const StyledButton = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    animation: ${zoomInOut} 0.1s ease-out 1;
  }
`;

export interface Props extends PropsWithChildren<object> {
  onClick?: () => void;
}

export const ProxyButton = ({ onClick, children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};
