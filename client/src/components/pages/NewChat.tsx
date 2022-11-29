import React from 'react';
import styled from 'styled-components';
import { PartnerNameInput } from '../inputs/PartnerNameInput';
import { BackButton } from '../buttons/BackButton';
import { HeaderBar } from '../layout/HeaderBar';
import { PageFrame } from './PageFrame';

const NewChatPage = styled(PageFrame)`
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-basis: 0;
`;

const ChoosePartner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export function NewChat() {
  return (
    <NewChatPage>
      <HeaderBar
        items={[
          {
            link: '/chatslist',
            icon: <BackButton />
          }
        ]}
      />
      <ChoosePartner>
        <h2>Who do you want to create with?</h2>
        <PartnerNameInput />
      </ChoosePartner>
    </NewChatPage>
  );
}
