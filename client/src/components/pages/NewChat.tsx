import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const PageHeadline = styled.h3`
  text-align: left;
  max-width: 13.75rem;
  font-size: 1.25rem;
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

export function NewChat() {
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
