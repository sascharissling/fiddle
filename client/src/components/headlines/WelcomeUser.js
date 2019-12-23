import React from 'react';
import styled from '@emotion/styled';

//STYLE start
const HelloUser = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;
//STYLE end

export default function WelcomeUser({ userName }) {
  return <HelloUser>Hello, {userName}.</HelloUser>;
}
