import styled from '@emotion/styled';

const TextButton = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: ${props => props.theme.tertiary};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export default TextButton;
