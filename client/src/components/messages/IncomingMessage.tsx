import styled from 'styled-components';
import { MessageWrapperIn } from './MessageWrapperIn';
import { TextMessage } from './Message';

const IncomingTextMessage = styled.div`
  ${TextMessage}
  background: transparent;
`;

type IncomingMessageProps = {
  incomingText: string;
};

export function IncomingMessage({ incomingText }: IncomingMessageProps) {
  return (
    <MessageWrapperIn>
      <IncomingTextMessage>{incomingText}</IncomingTextMessage>
    </MessageWrapperIn>
  );
}
