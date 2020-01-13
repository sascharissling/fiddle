import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fadeIn } from '../../utils/animations';

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
  animation: ${fadeIn} 0.1s;
`;

//STYLE end

export default function PlayAudio(props) {
  const [redirectToOverdub, setRedirectToOverdub] = React.useState(false);
  const chatId = props.match.params.id;
  const fileName = props.match.params.fileName;
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  return (
    <PlayAudioPage>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioUrl} onClick={() => setRedirectToOverdub(true)} />
        {redirectToOverdub && <Redirect to={`/chats/${chatId}/overdub/${fileName}`} />}
      </AudioInterfaceWrapper>
    </PlayAudioPage>
  );
}

PlayAudio.propTypes = {
  match: PropTypes.object
};
