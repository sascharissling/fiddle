import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Headline = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export default function PageHeadline({ headline }) {
  return <Headline>{headline}</Headline>;
}

PageHeadline.propTypes = {
  headline: PropTypes.string
};
