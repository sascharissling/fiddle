import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import { sendChatMessage, uploadAudio } from '../../api/chats';
import PropTypes from 'prop-types';

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
`;
//STYLE end

export default function RecordNewAudio(props) {
  const chatId = props.match.params.id;
  const [recordingDone, setRecordingDone] = React.useState(false);
  const [redirectToChat, setRedirectToChat] = React.useState(false);
  const [audioFileUrl, setAudioFileUrl] = React.useState('');

  // Send Chatmessage
  const type = 'audio';
  const body = audioFileUrl;
  const author = localStorage.getItem('userName');

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
    setRedirectToChat(true);
  }

  function handleDelete() {
    setRedirectToChat(true);
  }

  return (
    <RecordPage>
      <HeaderBar>
        <Link to={`/chat/${chatId}`}>
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
      {redirectToChat && <Redirect to={`/chat/${chatId}`} />}
    </RecordPage>
  );
}

RecordNewAudio.propTypes = {
  match: PropTypes.string
};
