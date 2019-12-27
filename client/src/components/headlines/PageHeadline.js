import React from 'react';
import styled from '@emotion/styled';

//STYLE start

const Headline = styled.h1`
  margin: 0;
  font-size: 25px;
`;

//STYLE end

export default function PageHeadline({ headline }) {
  return <Headline>{headline}</Headline>;
}
