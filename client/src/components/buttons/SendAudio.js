import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ProxyButton from './ProxyButton';

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
