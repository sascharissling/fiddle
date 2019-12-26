import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';

//STYLE start

const NameInput = styled.input`
  background: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  /* color: #f5f5f5; */
  color: ${props => props.theme.tertiary};
  max-width: 220px;
  &:focus {
    outline: none;
  }
`;

//STYLE end

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function UserNameInput() {
  const [userName, setUserName] = React.useState('');
  const [definedUsername, setDefinedUsername] = React.useState(false);

  function handleChange(event) {
    const upperCasedUserName = upperCaseFirstChar(event.target.value);
    setUserName(upperCasedUserName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('userName', `${userName}`);
    setDefinedUsername(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput autoFocus type="text" value={userName} onChange={handleChange} />
      </form>
      {definedUsername && (
        <Redirect to={`/chatlist?userName=${localStorage.getItem('userName')}`} />
      )}
    </>
  );
}
