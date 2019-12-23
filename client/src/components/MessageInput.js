import React from 'react';
import styled from '@emotion/styled';

const Message = styled.input`
  color: ${props => props.theme.tertiary};
  background: transparent;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 15px;
  flex-grow: 1;
  margin-right: 10px;
  padding: 7px;
  font-size: 14px;
  height: auto;
  overflow: hidden;
`;

export default function MessageInput({ onSubmit }) {
  const [message, setMessage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  }

  function handleChange(event) {
    const value = event.target.value;
    setMessage(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Message autoFocus type="text" value={message} onChange={handleChange} />
    </form>
  );
}
