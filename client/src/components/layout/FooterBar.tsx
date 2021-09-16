import styled from 'styled-components';

const FooterBar = styled.footer`
  background: ${props => props.theme.background};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100vw;
  padding: 0.625rem 1rem;
  flex-basis: 1;
`;

export default FooterBar;
