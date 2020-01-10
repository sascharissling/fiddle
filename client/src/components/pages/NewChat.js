import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//COMPONENTS imports
import PartnerNameInput from '../inputs/PartnerNameInput';
import BackButton from '../buttons/BackButton';
import HeaderBar from '../layout/HeaderBar';

//STYLE start

const NewChatPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-basis: 0;
`;

const PageHeadline = styled.h3`
  text-align: left;
  max-width: 220px;
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.theme.secondary};
  margin: 0;
`;

const ChoosePartner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
//STYLE end

export default function NewChat() {
  return (
    <NewChatPage>
      <HeaderBar>
        <Link to={'/chatslist'}>
          <BackButton />
        </Link>
      </HeaderBar>
      <ChoosePartner>
        <PageHeadline>Who do you want to create with?</PageHeadline>
        <PartnerNameInput />
      </ChoosePartner>
    </NewChatPage>
  );
}
