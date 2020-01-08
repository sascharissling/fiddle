import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Components imports
import ProxyButton from './ProxyButton';

//STYLE start

const Send = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.tertiary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

//STYLE end

export default function SendAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <Send>send</Send>
    </ProxyButton>
  );
}

SendAudio.propTypes = {
  onClick: PropTypes.func
};
