import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

//STYLE end

export default function RecordNewAudio(props) {
  const chatId = props.match.params.id;
  const [noAudioYet, setNoAudioYet] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(false);

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
            <RecordButton
              onClick={() => {
                setNoAudioYet(false);
                setIsRecording(true);
              }}
            />
          </>
        )}
        {!noAudioYet && (
          <>
            <RecordNewFiddle />
            <StopButton onClick={() => setIsRecording(false)} />
          </>
        )}
      </AudioInterfaceWrapper>
    </RecordPage>
  );
}
