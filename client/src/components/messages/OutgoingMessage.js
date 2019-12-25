import React from 'react';
import styled from '@emotion/styled';

//COMPONENTS imports
import MessageWrapperOut from './MessageWrapperOut';

//STYLE start
const OutgoingTextMessage = styled.div`
  min-width: 100px;
  max-width: 200px;
  background: ${props => props.theme.lightBackground};
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 20px 5px 0px;
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
