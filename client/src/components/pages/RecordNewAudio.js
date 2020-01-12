import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import { sendChatMessage, uploadAudio } from '../../api/chats';
import PropTypes from 'prop-types';
import { fadeIn } from '../../utils/animations';

//COMPONENTS imports
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import PlayJustRecordedAudio from '../audioInterface/PlayJustRecordedAudio';
import InitialAudioRecording from '../audioInterface/InitialAudioRecording';

//STYLE start

const RecordPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  animation: ${fadeIn} 0.1s;
`;
//STYLE end

export default function RecordNewAudio(props) {
  const chatId = props.match.params.id;
  const [recordingDone, setRecordingDone] = React.useState(false);
  const [redirectToChat, setRedirectToChat] = React.useState(false);
  const [audioFileUrl, setAudioFileUrl] = React.useState('');
  const type = 'audio';
  const body = audioFileUrl;
  const author = sessionStorage.getItem('userName');
  const socketMessage = {
    type: type,
    body: body,
    author: author,
    date: Date.now()
  };

  async function handleStop(recordedBlob) {
    const file_reader = new FileReader();
    const dateOfRecording = Date.now();
    file_reader.readAsDataURL(recordedBlob.blob);
    file_reader.onloadend = async function() {
      const base64_string = file_reader.result;
      uploadAudio(base64_string, author, chatId, dateOfRecording);
      return base64_string;
    };
    setAudioFileUrl(
      `https://res.cloudinary.com/fiddle/video/upload/${chatId}-${dateOfRecording}-${author}.webm`
    );
    setTimeout(() => {
      setRecordingDone(true);
    }, 1500);
  }

  function handleSend() {
    sendChatMessage(body, author, type, chatId);
    const io = require('socket.io-client');
    const socket = io('http://localhost:9090');
    socket.emit('message-sent', socketMessage);
    setRedirectToChat(true);
  }

  function handleDelete() {
    setRedirectToChat(true);
  }

  return (
    <RecordPage>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      {!recordingDone && <InitialAudioRecording handleStop={handleStop} />}

      {recordingDone && (
        <PlayJustRecordedAudio
          audioFileUrl={audioFileUrl}
          handleDelete={handleDelete}
          handleSend={handleSend}
          chatId={chatId}
        />
      )}
      {redirectToChat && <Redirect to={`/chats/${chatId}`} />}
    </RecordPage>
  );
}

RecordNewAudio.propTypes = {
  match: PropTypes.object
};
