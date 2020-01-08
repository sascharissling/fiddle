import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Components imports
import ProxyButton from './ProxyButton';

//STYLE start

const Discard = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.secondary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

//STYLE end

export default function DiscardAudio({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <Discard>discard</Discard>
    </ProxyButton>
  );
}

DiscardAudio.propTypes = {
  onClick: PropTypes.func
};
