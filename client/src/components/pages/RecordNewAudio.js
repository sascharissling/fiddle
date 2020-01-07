import React from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import { sendChatMessage, uploadAudio, deleteAudio } from '../../api/chats';
import { ReactMic } from 'react-mic';

//COMPONENTS imports
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import NoAudioYet from '../headlines/NoAudioYet';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import RecordNewFiddle from '../audioInterface/RecordNewFiddle';
import RecordButton from '../buttons/RecordButton';
import StopButton from '../buttons/StopButton';
import FiddleDisplay from '../audioInterface/FiddleDisplay';
import LoadingLineLong from '../misc/LoadingLineLong';
import SendAudio from '../buttons/SendAudio';
import DiscardAudio from '../buttons/DiscardAudio';

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

const FileHandling = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
//STYLE end

export default function RecordNewAudio(props) {
  const chatId = props.match.params.id;
  const [noAudioYet, setNoAudioYet] = React.useState(true);
  const [recordingDone, setRecordingDone] = React.useState(false);
  const [isRecording, setIsRecording] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [redirectToChat, setRedirectToChat] = React.useState(false);
  const [audioFileUrl, setAudioFileUrl] = React.useState('');
  const [recordingDate, setRecordingDate] = React.useState('');

  // Send Chatmessage
  const type = 'audio';
  const body = audioFileUrl;
  const author = localStorage.getItem('userName');

  function startRecording() {
    setNoAudioYet(false);
    setIsRecording(true);
  }

  function handleData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function stopRecording() {
    setIsRecording(false);
  }

  async function handleStop(recordedBlob) {
    setIsProcessing(true);
    // Transform blob to base64 format so it can be uploaded to cloudinary with a unique file name
    const file_reader = new FileReader();
    const dateOfRecording = Date.now();
    setRecordingDate(dateOfRecording);
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
      setIsProcessing(false);
    }, 1500);
  }

  function handleSend() {
    sendChatMessage(body, author, type, chatId);
    setRedirectToChat(true);
  }
  function handleDelete() {
    deleteAudio(author, chatId, recordingDate);
    setRedirectToChat(true);
  }

  return (
    <RecordPage>
      <HeaderBar>
        <Link to={`/chat/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      {!recordingDone && (
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
              {isProcessing && <LoadingLineLong />}
              {!isProcessing && <RecordNewFiddle />}
            </>
          )}
          {isRecording && <StopButton onClick={stopRecording} />}
          {!isRecording && !isProcessing && <RecordButton onClick={startRecording} />}
        </AudioInterfaceWrapper>
      )}

      {recordingDone && (
        <>
          <AudioInterfaceWrapper>
            <FiddleDisplay audioFileUrl={audioFileUrl} />
            <FileHandling>
              <SendAudio onClick={handleSend} />
              <DiscardAudio onClick={handleDelete} />
            </FileHandling>
          </AudioInterfaceWrapper>
        </>
      )}
      {redirectToChat && <Redirect to={`/chat/${chatId}`} />}
    </RecordPage>
  );
}
