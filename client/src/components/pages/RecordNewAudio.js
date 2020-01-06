import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { sendChatMessage, uploadAudio } from '../../api/chats';
import { ReactMic } from 'react-mic';

//COMPONENTS imports
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import NoAudioYet from '../headlines/NoAudioYet';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import RecordNewFiddle from '../audioInterface/RecordNewFiddle';
import RecordButton from '../buttons/RecordButton';
import StopButton from '../buttons/StopButton';

//STYLE start

const RecordPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`;

const Mic = styled(ReactMic)`
  opacity: 0;
  height: 0;
  width: 0;
`;

//STYLE end

export default function RecordNewAudio(props) {
  const chatId = props.match.params.id;
  const [noAudioYet, setNoAudioYet] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(false);
  const [newAudioFile, setNewAudioFile] = React.useState({});
  const [audioFileUrl, setAudioFileUrl] = React.useState('');

  // Send Chatmessage
  const type = 'audio';
  const body = newAudioFile;
  const author = localStorage.getItem('userName');

  function startRecording() {
    setNoAudioYet(false);
    setIsRecording(true);
  }
  function stopRecording(recordedBlob) {
    setIsRecording(false);
    console.log('this is the new blob' + recordedBlob);
  }

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function handleStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    const fileName = chatId + '-' + Date.now() + '-' + author;

    const a = document.createElement('a');
    a.download = `${fileName}.wav`;
    a.href = window.URL.createObjectURL(recordedBlob);
    a.click();
  }
  async function handleSubmit() {
    sendChatMessage(body, author, type, chatId);
  }

  return (
    <RecordPage>
      <HeaderBar>
        <Link to={`/chat/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        {noAudioYet && (
          <>
            <NoAudioYet />
          </>
        )}
        {!noAudioYet && (
          <>
            <Mic
              record={isRecording}
              onStop={handleStop}
              onData={handleData}
              strokeColor="#000000"
              backgroundColor="white"
              mimeType="audio/webm"
            />
            <RecordNewFiddle />
          </>
        )}
        {isRecording && <StopButton onClick={stopRecording} />}
        {!isRecording && <RecordButton onClick={startRecording} />}
        <button onClick={handleSubmit} type="button">
          Send To Db
        </button>
      </AudioInterfaceWrapper>
    </RecordPage>
  );
}
