import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBaseStyle = `
  display: flex;
  width: 100vw;
  height: 2.8125rem;
  align-content: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex-basis: 1;
`;

export const Header = styled.header`
  ${HeaderBaseStyle}
  background: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
`;

export interface Props {
  items: { link: string; icon: JSX.Element }[];
}

export const HeaderBar = ({ items }: Props) => {
  return (
    <Header>
      {items.map(item => (
        <Link key={item.link} to={item.link}>
          {item.icon}
        </Link>
      ))}
    </Header>
  );
};
