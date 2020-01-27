import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MessageWrapper from './MessageWrapperIn';

const IncomingTextMessage = styled.div`
  word-break: break-all;
  max-width: 200px;
  background: transparent;
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 0px 5px 0px;
  padding: 8px;
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
