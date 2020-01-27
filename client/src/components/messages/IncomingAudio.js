import React from 'react';
import PropTypes from 'prop-types';

import MessageWrapperIn from './MessageWrapperIn';
import ChatWaveFormDisplay from './ChatWaveFormDisplay';

export default function IncomingAudio({ onClick, audioFileUrl }) {
  return (
    <MessageWrapperIn onClick={onClick}>
      <ChatWaveFormDisplay audioFileUrl={audioFileUrl} />
    </MessageWrapperIn>
  );
}

IncomingAudio.propTypes = {
  onClick: PropTypes.func,
  audioFileUrl: PropTypes.string
};
