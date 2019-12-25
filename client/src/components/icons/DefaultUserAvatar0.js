import React from 'react';
import styled from '@emotion/styled';

const Path = styled.path`
  fill: ${props => props.theme.secondary};
`;

export default function DefaultUserAvatar0() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <Path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0ZM9.707,10.332A1,1,0,0,1,8.293,8.918a4.032,4.032,0,0,1,5.414,0,1,1,0,1,1-1.414,1.414,2.072,2.072,0,0,0-2.586,0ZM16,26c-2.209,0-4-2.239-4-5s1.791-5,4-5,4,2.239,4,5S18.209,26,16,26Zm7.707-15.668a1,1,0,0,1-1.414,0,2.072,2.072,0,0,0-2.586,0,1,1,0,0,1-1.414-1.414,4.032,4.032,0,0,1,5.414,0,1,1,0,0,1,0,1.414Z" />
    </svg>
  );
}
