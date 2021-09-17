import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MessageWrapper from './MessageWrapperIn';
import TextMessage from './Message';

const IncomingTextMessage = styled.div`
  ${TextMessage}
  background: transparent;
`;

type IncomingMessageProps = {
  incomingText: string;
};

export function IncomingMessage({ incomingText }: IncomingMessageProps) {
  return (
    <MessageWrapper>
      <IncomingTextMessage>{incomingText}</IncomingTextMessage>
    </MessageWrapper>
  );
}
