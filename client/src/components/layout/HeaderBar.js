import styled from '@emotion/styled';

const HeaderBar = styled.header`
  width: 100vw;
  height: 45px;
  display: flex;
  background: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-basis: 1;
`;

export default HeaderBar;
