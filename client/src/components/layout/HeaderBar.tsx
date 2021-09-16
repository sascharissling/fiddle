import styled from 'styled-components';

export const HeaderBaseStyle = `
display: flex;
width: 100vw;
height: 2.8125rem;
align-content: center;
padding-left: 1.25rem;
padding-right: 1.25rem;
flex-basis: 1;
`;

const HeaderBar = styled.header`
  ${HeaderBaseStyle}
  background: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
`;

export default HeaderBar;
