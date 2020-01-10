import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//COMPONENTS imports
import MessageWrapperOut from './MessageWrapperOut';

//STYLE start
const OutgoingTextMessage = styled.div`
  word-break: break-all;
  max-width: 200px;
  background: ${props => props.theme.lightBackground};
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 0px 5px 0px;
  padding: 8px;
`;
//STYLE end

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
