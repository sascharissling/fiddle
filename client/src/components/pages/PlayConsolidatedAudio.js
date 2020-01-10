import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendChatMessage } from '../../api/chats';

//COMPONENTS imports
import ConsolidatedFiddle from '../audioInterface/ConsolidatedFiddle';
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import FileHandling from '../audioInterface/FileHandling';
import NoAudioYet from '../headlines/NoAudioYet';

//STYLE start

const PlayAudioPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`;

//STYLE end

export default function PlayConsolidatedAudio(props) {
  const [visualizing, setVisualizing] = React.useState(true);
  const [redirectToChat, setRedirectToChat] = React.useState(false);
  const chatId = props.match.params.id;
  const fileName = props.match.params.fileName;
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  // Send Chatmessage
  const type = 'audio';
  const body = audioUrl;
  const author = localStorage.getItem('userName');

  React.useEffect(() => {
    setTimeout(() => setVisualizing(false), 2000);
  }, []);

  function handleSend() {
    sendChatMessage(body, author, type, chatId);
    setRedirectToChat(true);
  }

  function handleDelete() {
    setRedirectToChat(true);
  }

  return (
    <PlayAudioPage>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        {visualizing && <NoAudioYet systemMessage={'visualizing audio.'} />}
        {!visualizing && (
          <>
            <ConsolidatedFiddle audioFileUrl={audioUrl} />
            <FileHandling handleDelete={handleDelete} handleSend={handleSend} />
          </>
        )}
      </AudioInterfaceWrapper>
      {redirectToChat && <Redirect to={`/chats/${chatId}`} />}
    </PlayAudioPage>
  );
}

PlayConsolidatedAudio.propTypes = {
  match: PropTypes.object
};
