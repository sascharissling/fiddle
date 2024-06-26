import { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { sendChatMessage } from '../../api/chats';
import { ConsolidatedFiddle } from '../audioInterface/ConsolidatedFiddle';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { FileHandling } from '../audioInterface/FileHandling';
import { NoAudioYet } from '../headlines/NoAudioYet';
import { PageFrame } from './PageFrame';

type PlayConsolidatedAudioProps = {
  id: string;
  fileName: string;
};

export function PlayConsolidatedAudio() {
  const { id: chatId, fileName } = useParams<PlayConsolidatedAudioProps>();
  const [visualizing, setVisualizing] = useState(true);
  const [redirectToChat, setRedirectToChat] = useState(false);
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;
  const type = 'audio';
  const body = audioUrl;
  const author = sessionStorage.getItem('userName');
  const socketMessage = {
    type: type,
    body: body,
    author: author,
    date: Date.now()
  };

  useEffect(() => {
    setTimeout(() => setVisualizing(false), 2000);
  }, []);

  useEffect(() => {
    if (redirectToChat) {
      setTimeout(() => redirect(`/chats/${chatId}`), 2000);
    }
  }, [redirectToChat]);

  function handleSend() {
    sendChatMessage(body, author, type, chatId);
    const io = require('socket.io-client');
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.emit('message-sent', socketMessage);
    setRedirectToChat(true);
  }

  function handleDelete() {
    setRedirectToChat(true);
  }

  return (
    <PageFrame>
      <HeaderBar
        items={[
          {
            link: `/chats/${chatId}`,
            icon: <BackButton />
          }
        ]}
      />
      <AudioInterfaceWrapper>
        {visualizing && <NoAudioYet systemMessage={'visualizing audio.'} />}
        {!visualizing && (
          <>
            <ConsolidatedFiddle audioFileUrl={audioUrl} />
            <FileHandling handleDelete={handleDelete} handleSend={handleSend} />
          </>
        )}
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}
