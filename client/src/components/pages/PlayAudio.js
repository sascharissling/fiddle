import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//COMPONENTS imports
import FiddleDisplay from '../audioInterface/FiddleDisplay';
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';

//STYLE start

const PlayAudioPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`;

//STYLE end

export default function PlayAudio(props) {
  const fileName = props.match.params.fileName;
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;
  const chatId = props.match.params.id;
  return (
    <PlayAudioPage>
      <HeaderBar>
        <Link to={`/chat/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioUrl} />
      </AudioInterfaceWrapper>
    </PlayAudioPage>
  );
}
