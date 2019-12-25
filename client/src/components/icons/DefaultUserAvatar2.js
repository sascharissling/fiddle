import React from 'react';
import styled from '@emotion/styled';

const Path = styled.path`
  fill: ${props => props.theme.secondary};
`;

export default function DefaultUserAvatar2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <Path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm6,8a2,2,0,1,1-2,2A2,2,0,0,1,22,8ZM10,8a2,2,0,1,1-2,2A2,2,0,0,1,10,8Zm6,18a9.994,9.994,0,0,1-8.576-4.855L10,19.6A7,7,0,0,0,22,19.6l2.573,1.544A10,10,0,0,1,16,26Z" />
    </svg>
  );
}
