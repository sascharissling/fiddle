import React from 'react';
import { Redirect } from 'react-router-dom';
import { sendChatMessage } from '../../api/chats';
import { ConsolidatedFiddle } from '../audioInterface/ConsolidatedFiddle';
import { HeaderBar } from '../layout/HeaderBar';
import { BackButton } from '../buttons/BackButton';
import { AudioInterfaceWrapper } from '../audioInterface/AudioInterfaceWrapper';
import { FileHandling } from '../audioInterface/FileHandling';
import { NoAudioYet } from '../headlines/NoAudioYet';
import { PageFrame } from './PageFrame';

type PlayConsolidatedAudioProps = {
  match: {
    params: {
      id: string;
      fileName: string;
    };
  };
};

export function PlayConsolidatedAudio({ match }: PlayConsolidatedAudioProps) {
  const [visualizing, setVisualizing] = React.useState(true);
  const [redirectToChat, setRedirectToChat] = React.useState(false);
  const chatId = match.params.id;
  const fileName = match.params.fileName;
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

  React.useEffect(() => {
    setTimeout(() => setVisualizing(false), 2000);
  }, []);

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
      {redirectToChat && <Redirect to={`/chats/${chatId}`} />}
    </PageFrame>
  );
}
