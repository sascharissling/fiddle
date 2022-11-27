import React from 'react';
import styled from 'styled-components';

const HelloUser = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;

export function WelcomeUser({ userName }) {
  return <HelloUser>Hello, {userName}.</HelloUser>;
}
