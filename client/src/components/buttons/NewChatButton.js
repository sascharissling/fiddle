import React from 'react';
import styled from '@emotion/styled';

//STYLE start

const ProxyButton = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NewChat = styled.path`
  fill: ${props => props.theme.primary};
`;

//STYLE end

export default function NewChatButton({ onClick }) {
  return (
    <ProxyButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.217"
        height="17.999"
        viewBox="0 0 18.217 17.999"
      >
        <NewChat
          id="edit"
          d="M9.176,15.2,7.462,19.6l4.324-1.79L9.176,15.2Zm12.551-9.4-.549-.549a1.552,1.552,0,0,0-2.194,0l-1.1,1.1L20.63,9.1l1.1-1.1A1.551,1.551,0,0,0,21.727,5.807ZM9.263,14.98l.393-.393L12.4,17.331l7.682-7.682L17.338,6.905l.549-.549Zm9.476,6.275-13.212,0,0-13.212,9.25,0,1.45-1.536H4.741a.776.776,0,0,0-.776.776V22.028a.776.776,0,0,0,.776.776H19.485a.775.775,0,0,0,.776-.776V11.119L18.7,12.653l.042,8.6Z"
          transform="translate(-3.965 -4.804)"
        />
      </svg>
    </ProxyButton>
  );
}
