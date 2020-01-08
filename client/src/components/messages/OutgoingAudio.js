import React from 'react';
import PropTypes from 'prop-types';

//COMPONENTS imports
import MessageWrapperOut from './MessageWrapperOut';
import ChatWaveFormDisplay from './ChatWaveFormDisplay';

export default function OutgoingAudio({ onClick, audioFileUrl }) {
  return (
    <MessageWrapperOut onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperOut>
  );
}

OutgoingAudio.propTypes = {
  onClick: PropTypes.func,
  audioFileUrl: PropTypes.string
};
