import React from 'react';
import styled from '@emotion/styled';
import { sendChatMessage } from '../../api/chats';
import PropTypes from 'prop-types';

const Input = styled.input`
  color: ${props => props.theme.tertiary};
  background: transparent;
  border: 0.0625rem solid ${props => props.theme.secondary};
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  height: auto;
  overflow: hidden;
  width: 100%;
`;

const MessageForm = styled.form`
  flex-grow: 1;
  margin-right: 0.625rem;
`;

export default function MessageInput({ chatId }) {
  const [message, setMessage] = React.useState('');
  const type = 'text';
  const body = message;
  const author = sessionStorage.getItem('userName');
  const socketMessage = {
    type: type,
    body: body,
    author: author,
    date: Date.now(),
    id: chatId
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
      return;
    }
    sendChatMessage(body, author, type, chatId);
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('message-sent', socketMessage);
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

MessageInput.propTypes = {
  chatId: PropTypes.string
};
