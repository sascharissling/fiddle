import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const NameInput = styled.input`
  background: transparent;
  border: 1px solid pink;
  font-size: 1.875rem;
  font-weight: bold;
  color: ${props => props.theme.tertiary};
  max-width: 13.75rem;
`;

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function UserNameInput() {
  const [userName, setUserName] = React.useState('');
  const [definedUsername, setDefinedUsername] = React.useState(false);

  function handleChange(event) {
    const upperCasedUserName = upperCaseFirstChar(event.target.value);
    setUserName(upperCasedUserName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem('userName', `${userName}`);
    setDefinedUsername(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput autoFocus type="text" value={userName} onChange={handleChange} />
      </form>
      {definedUsername && <Redirect to={'/chatslist'} />}
    </>
  );
}
