import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//COMPONENTS imports
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import OverdubFiddle from '../audioInterface/OverdubFiddle';
import { fadeIn } from '../../utils/animations';

//STYLE start

const OverdubAudioPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.1s;
`;

//STYLE end

export default function OverdubAudio(props) {
  const chatId = props.match.params.id;
  const fileName = props.match.params.originalFileName;
  const audioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  return (
    <OverdubAudioPage>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <OverdubFiddle originalAudioFileUrl={audioFileUrl} chatId={chatId} />
      </AudioInterfaceWrapper>
    </OverdubAudioPage>
  );
}

OverdubAudio.propTypes = {
  match: PropTypes.object
};
