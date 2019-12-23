import React from 'react';
import styled from '@emotion/styled';

const NameInput = styled.input`
  background: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.tertiary};
  max-width: 220px;
  &:focus {
    outline: none;
  }
`;

export default function UserNameInput({ onChange }) {
  return <NameInput autoFocus type="text" onChange={onChange} />;
}
