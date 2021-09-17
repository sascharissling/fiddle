import styled from 'styled-components';
import { MessageWrapperOut } from './MessageWrapperOut';
import { TextMessage } from './Message';

const OutgoingTextMessage = styled.div`
  ${TextMessage}
  background: ${props => props.theme.lightBackground};
`;

type OutgoingMessageProps = {
  outgoingText: string;
};

export function OutgoingMessage({ outgoingText }: OutgoingMessageProps) {
  return (
    <MessageWrapperOut>
      <OutgoingTextMessage>{outgoingText}</OutgoingTextMessage>
    </MessageWrapperOut>
  );
}
