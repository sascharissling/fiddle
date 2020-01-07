import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//COMPONENTS imports
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import FiddleDisplay from '../audioInterface/FiddleDisplay';
import SendAudio from '../buttons/SendAudio';
import DiscardAudio from '../buttons/DiscardAudio';

//STYLE start
const FileHandling = styled.div`
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

export default function PlayJustRecordedAudio({ audioFileUrl, handleDelete, handleSend }) {
  return (
    <>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioFileUrl} />
        <FileHandling>
          <div>
            <DiscardAudio onClick={handleDelete} />
          </div>
          <div>
            <SendAudio onClick={handleSend} />
          </div>
        </FileHandling>
      </AudioInterfaceWrapper>
    </>
  );
}

PlayJustRecordedAudio.propTypes = {
  audioFileUrl: PropTypes.string,
  handleDelete: PropTypes.func,
  handleSend: PropTypes.func
};
