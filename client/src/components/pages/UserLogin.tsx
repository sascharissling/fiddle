import styled from 'styled-components';
import { UserNameInput } from '../inputs/UserNameInput';
import { PageFrame } from './PageFrame';

const LoginPage = styled(PageFrame)`
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const PageHeadline = styled.h3`
  text-align: left;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${props => props.theme.secondary};
  margin: 0;
`;

export function UserLogin() {
  return (
    <LoginPage>
      <PageHeadline>Who are you?</PageHeadline>
      <UserNameInput />
    </LoginPage>
  );
}
