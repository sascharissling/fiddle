import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';
import { initiateNewChat } from '../../api/chats';

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

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PartnerNameInput() {
  const [partnerName, setPartnerName] = React.useState('');
  const [definedPartnerName, setDefinedPartnerName] = React.useState(false);

  const user1 = localStorage.getItem('userName');
  const user2 = partnerName;
  const messages = [
    {
      type: 'text',
      body: '👋',
      author: user1
    }
  ];

  function handleChange(event) {
    const upperCasedPartnerName = upperCaseFirstChar(event.target.value);
    setPartnerName(upperCasedPartnerName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    initiateNewChat(user1, user2, messages);
    setDefinedPartnerName(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput autoFocus utype="text" value={partnerName} onChange={handleChange} />
      </form>
      {definedPartnerName && (
        <Redirect to={`/chatlist?userName=${localStorage.getItem('userName')}`} />
      )}
    </>
  );
}
