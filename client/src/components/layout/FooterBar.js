import styled from '@emotion/styled';

const FooterBar = styled.footer`
  background: ${props => props.theme.background};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100vw;
  padding: 10px 15px 10px 15px;
  flex-basis: 1;
`;

export default FooterBar;
