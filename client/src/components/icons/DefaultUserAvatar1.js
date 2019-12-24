import React from 'react';
import styled from '@emotion/styled';

const Path = styled.path`
  fill: ${props => props.theme.secondary};
`;

export default function DefaultUserAvatar1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <Path
        id="shocked2"
        d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0ZM10,14c-1.1,0-2-1.343-2-3s.9-3,2-3,2,1.343,2,3S11.1,14,10,14Zm6,12a4,4,0,1,1,4-4A4,4,0,0,1,16,26Zm6-12c-1.1,0-2-1.343-2-3s.9-3,2-3,2,1.343,2,3S23.1,14,22,14Z"
        fill="#444"
      />
    </svg>
  );
}
