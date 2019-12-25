import React from 'react';
import styled from '@emotion/styled';

//COMPONENTS imports
import MessageWrapper from './MessageWrapperIn';

//STYLE start
const IncomingTextMessage = styled.div`
  min-width: 100px;
  max-width: 200px;
  background: transparent;
  font-size: 12px;
  color: ${props => props.theme.tertiary};
  border-radius: 15px;
  border: 0.5px solid ${props => props.theme.secondary};
  margin: 5px 0px 5px 20px;
  padding: 8px;
`;
//STYLE end

export default function IncomingMessage({ incomingText }) {
  return (
    <MessageWrapper>
      <IncomingTextMessage>{incomingText}</IncomingTextMessage>
    </MessageWrapper>
  );
}
