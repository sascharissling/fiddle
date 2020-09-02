import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import OverdubFiddle from '../audioInterface/OverdubFiddle';
import PageFrame from './PageFrame';

export default function OverdubAudio(props) {
  const chatId = props.match.params.id;
  const fileName = props.match.params.originalFileName;
  const audioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  return (
    <PageFrame>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <OverdubFiddle originalAudioFileUrl={audioFileUrl} chatId={chatId} />
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}

OverdubAudio.propTypes = {
  match: PropTypes.object
};
