import React from 'react';
import styled from '@emotion/styled';
import { sendChatMessage } from '../../api/chats';

const Input = styled.input`
  color: ${props => props.theme.tertiary};
  background: transparent;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 15px;
  padding: 7px;
  font-size: 14px;
  height: auto;
  overflow: hidden;
  width: 100%;
`;

const MessageForm = styled.form`
  flex-grow: 1;
  margin-right: 10px;
`;

export default function MessageInput({ chatId }) {
  const [message, setMessage] = React.useState('');
  const type = 'text';
  const body = message;
  const author = localStorage.getItem('userName');

  async function handleSubmit(event) {
    sendChatMessage(body, author, type, chatId);
    setMessage('');
  }

  function handleChange(event) {
    const value = event.target.value;
    setMessage(value);
  }

  return (
    <MessageForm onSubmit={handleSubmit}>
      <Input autoFocus author={author} type="text" value={message} onChange={handleChange} />
    </MessageForm>
  );
}
