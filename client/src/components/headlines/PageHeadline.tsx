import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export function PageHeadline({ headline }) {
  return <Headline>{headline}</Headline>;
}
