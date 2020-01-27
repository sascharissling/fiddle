import React from 'react';
import styled from '@emotion/styled';
import { fadeIn } from '../../utils/animations';
import UserNameInput from '../inputs/UserNameInput';

const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation: ${fadeIn} 0.1s;
`;

const PageHeadline = styled.h3`
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.theme.secondary};
  margin: 0;
`;

export default function UserLogin() {
  return (
    <LoginPage>
      <div>
        <PageHeadline>Who are you?</PageHeadline>
        <UserNameInput />
      </div>
    </LoginPage>
  );
}
