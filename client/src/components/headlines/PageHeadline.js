import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//STYLE start

const Headline = styled.h1`
  margin: 0;
  font-size: 25px;
`;

//STYLE end

export default function PageHeadline({ headline }) {
  return <Headline>{headline}</Headline>;
}

PageHeadline.propTypes = {
  headline: PropTypes.string
};
