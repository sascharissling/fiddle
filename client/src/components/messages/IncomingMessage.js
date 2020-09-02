import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MessageWrapper from './MessageWrapperIn';
import TextMessage from './Message';

const IncomingTextMessage = styled.div`
  ${TextMessage}
  background: transparent;
`;

export default function IncomingMessage({ incomingText }) {
  return (
    <MessageWrapper>
      <IncomingTextMessage>{incomingText}</IncomingTextMessage>
    </MessageWrapper>
  );
}
IncomingMessage.propTypes = {
  incomingText: PropTypes.string
};
