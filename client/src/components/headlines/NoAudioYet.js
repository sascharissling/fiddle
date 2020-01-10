import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//STYLE start

const SystemMessage = styled.h3`
  font-size: 25px;
  font-style: bold;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

const NoAudioYetWrapper = styled.div`
  height: 350px;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

//STYLE end

export default function NoAudioYet({ systemMessage }) {
  return (
    <NoAudioYetWrapper>
      <SystemMessage>{systemMessage}</SystemMessage>
    </NoAudioYetWrapper>
  );
}

NoAudioYet.propTypes = {
  systemMessage: PropTypes.string
};
