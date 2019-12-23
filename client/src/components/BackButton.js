import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import backIcon from '../assets/backIcon';

//STYLE start

const Button = styled.button`
  background: transparent;

  margin: 0;
  padding: 0;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const BackArrow = styled.img``;

//STYLE end

export default function BackButton({ location }) {
  return (
    <Link to={location}>
      <Button>
        <BackArrow src={backIcon} />
      </Button>
    </Link>
  );
}
