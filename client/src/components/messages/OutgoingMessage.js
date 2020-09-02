import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MessageWrapperOut from './MessageWrapperOut';
import TextMessage from './Message';

const OutgoingTextMessage = styled.div`
  ${TextMessage}
  background: ${props => props.theme.lightBackground};
`;

export default function OutgoingMessage({ outgoingText }) {
  return (
    <MessageWrapperOut>
      <OutgoingTextMessage>{outgoingText}</OutgoingTextMessage>
    </MessageWrapperOut>
  );
}

OutgoingMessage.propTypes = {
  outgoingText: PropTypes.string
};
