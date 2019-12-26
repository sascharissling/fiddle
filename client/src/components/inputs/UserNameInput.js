import React from 'react';
import styled from '@emotion/styled';

//STYLE start

const NameInput = styled.input`
  background: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.tertiary};
  max-width: 220px;
  &:focus {
    outline: none;
  }
`;

//STYLE end

export default function UserNameInput({ onSubmit }) {
  const [userName, setUserName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(userName);
    setUserName('');
  }
  function handleChange(event) {
    const value = event.target.value;
    setUserName(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <NameInput autoFocus type="text" value={userName} onChange={handleChange} />
    </form>
  );
}
