import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { redirect } from 'react-router-dom';
import { initiateNewChat, getChatId } from '../../api/chats';

const NameInput = styled.input`
  background: transparent;
  border: none;
  font-size: 1.875rem;
  font-weight: bold;
  color: ${props => props.theme.tertiary};
  max-width: 13.75rem;
`;

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function PartnerNameInput() {
  const [partnerName, setPartnerName] = useState('');
  const [chatId, setChatId] = useState('');
  const [definedPartnerName, setDefinedPartnerName] = useState(false);
  const userName1 = sessionStorage.getItem('userName');
  const userName2 = partnerName;
  const messages = [
    {
      type: 'text',
      body: `Hey let's create 👋`,
      author: userName1
    }
  ];

  function handleChange(event) {
    const upperCasedPartnerName = upperCaseFirstChar(event.target.value);
    setPartnerName(upperCasedPartnerName);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const isChat = await getChatId(userName1, userName2);
    if (isChat) {
      setChatId(isChat);
      setDefinedPartnerName(true);
    }
    if (!isChat) {
      await initiateNewChat(userName1, userName2, messages);
      const chatId = await getChatId(userName1, userName2);
      setChatId(chatId);
      setDefinedPartnerName(true);
    }
  }

  useEffect(() => {
    if (definedPartnerName) {
      setTimeout(() => redirect(`/chats/${chatId}`), 2000);
    }
  }, [definedPartnerName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput autoFocus type="text" value={partnerName} onChange={handleChange} />
      </form>
    </>
  );
}
