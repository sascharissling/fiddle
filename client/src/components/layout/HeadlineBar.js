import styled from '@emotion/styled';

const HeadlineBar = styled.div`
  width: 100vw;
  height: 45px;
  display: flex;
  flex-flow: column nowrap;
  background: ${props => props.theme.background};
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-basis: 1;
`;

export default HeadlineBar;
