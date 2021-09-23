import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 2.8125rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const ChatDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-left: 0.625rem;
  flex-grow: 1;
  overflow: hidden;
`;

const PartnerName = styled.h3`
  font-size: 1rem;
  margin: 0;
`;
const LastMessage = styled.p`
  font-size: 0.75rem;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LastMessageDate = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

type ChatListItemProps = {
  userImgSrc: string;
  lastMessage: string;
  partnerName: string;
  lastMessageDate: string;
};

export function ChatListItem({
  userImgSrc,
  lastMessage,
  partnerName,
  lastMessageDate
}: ChatListItemProps) {
  return (
    <Wrapper>
      <img src={userImgSrc} alt="default user" />
      <ChatDetails>
        <PartnerName>{partnerName}</PartnerName>
        <LastMessage>{lastMessage}</LastMessage>
      </ChatDetails>

      <LastMessageDate>{lastMessageDate}</LastMessageDate>
    </Wrapper>
  );
}
