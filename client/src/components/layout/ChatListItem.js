import React from 'react';
import styled from '@emotion/styled';

//COMPONENTS imports
import DefaultUserAvatar0 from '../icons/DefaultUserAvatar0';

//STYLE start

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 40px;
  cursor: pointer;
`;

const ChatDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-left: 10px;
  flex-grow: 1;
`;

const PartnerName = styled.h3`
  font-size: 15px;
  margin: 0;
`;
const LastMessage = styled.p`
  font-size: 12px;
  margin: 0;
`;

const LastMessageDate = styled.p`
  font-size: 12px;
  margin: 0;
`;

//STYLE end

export default function ChatListItem({ onClick, lastMessage, partnerName, lastMessageDate }) {
  return (
    <Wrapper onClick={onClick}>
      <DefaultUserAvatar0 />
      <ChatDetails>
        <PartnerName>{partnerName}</PartnerName>
        <LastMessage>{lastMessage}</LastMessage>
      </ChatDetails>

      <LastMessageDate>{lastMessageDate}</LastMessageDate>
    </Wrapper>
  );
}
