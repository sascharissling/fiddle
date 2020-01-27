import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HelloUser = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;

export default function WelcomeUser({ userName }) {
  return <HelloUser>Hello, {userName}.</HelloUser>;
}

WelcomeUser.propTypes = {
  userName: PropTypes.string
};
