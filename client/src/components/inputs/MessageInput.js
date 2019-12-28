import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  color: ${props => props.theme.tertiary};
  background: transparent;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 15px;
  margin-right: 10px;
  padding: 7px;
  font-size: 14px;
  height: auto;
  overflow: hidden;
  width: 100%;
`;

const MessageForm = styled.form`
  width: 90%;
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
    <MessageForm onSubmit={handleSubmit}>
      <Input autoFocus type="text" value={message} onChange={handleChange} />
    </MessageForm>
  );
}
