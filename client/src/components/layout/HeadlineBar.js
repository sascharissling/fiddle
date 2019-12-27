import styled from '@emotion/styled';

const HeadlineBar = styled.div`
  width: 100vw;
  height: 45px;
  display: flex;
  background: ${props => props.theme.background};
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export default HeadlineBar;
