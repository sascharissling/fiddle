import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';
import { initiateNewChat, getChatId } from '../../api/chats';

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

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PartnerNameInput() {
  const [partnerName, setPartnerName] = React.useState('');
  const [chatId, setChatId] = React.useState('');
  const [definedPartnerName, setDefinedPartnerName] = React.useState(false);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput autoFocus utype="text" value={partnerName} onChange={handleChange} />
      </form>
      {definedPartnerName && <Redirect to={`/chats/${chatId}`} />}
    </>
  );
}
