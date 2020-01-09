import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//STYLE start
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 40px;
  margin-bottom: 7px;
  cursor: pointer;
`;

const ChatDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-left: 10px;
  flex-grow: 1;
  overflow: hidden;
`;

const PartnerName = styled.h3`
  font-size: 15px;
  margin: 0;
`;
const LastMessage = styled.p`
  font-size: 12px;
  margin: 0;
  text-overflow: ellipsis;
`;

const LastMessageDate = styled.p`
  font-size: 12px;
  margin: 0;
`;
//STYLE end

export default function ChatListItem({
  userImgSrc,
  onClick,
  lastMessage,
  partnerName,
  lastMessageDate
}) {
  return (
    <Wrapper onClick={onClick}>
      <img src={userImgSrc} alt={'default user'} />
      <ChatDetails>
        <PartnerName>{partnerName}</PartnerName>
        <LastMessage>{lastMessage}</LastMessage>
      </ChatDetails>

      <LastMessageDate>{lastMessageDate}</LastMessageDate>
    </Wrapper>
  );
}

ChatListItem.propTypes = {
  onClick: PropTypes.func,
  userImgSrc: PropTypes.string,
  lastMessage: PropTypes.string,
  partnerName: PropTypes.string,
  lastMessageDate: PropTypes.string
};
