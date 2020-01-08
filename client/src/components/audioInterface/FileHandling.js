import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//COMPONENTS imports
import SendAudio from '../buttons/SendAudio';
import DiscardAudio from '../buttons/DiscardAudio';

//STYLE start
const FileHandlingDisplay = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 30px;
  width: 100vw;
  div {
    display: flex;
    justify-content: center;
    width: 50%;
  }
`;
//STYLE end

export default function FileHandling({ handleDelete, handleSend }) {
  return (
    <FileHandlingDisplay>
      <div>
        <DiscardAudio onClick={handleDelete} />
      </div>
      <div>
        <SendAudio onClick={handleSend} />
      </div>
    </FileHandlingDisplay>
  );
}

FileHandling.propTypes = {
  handleDelete: PropTypes.func,
  handleSend: PropTypes.func
};
