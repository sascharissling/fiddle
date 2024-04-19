import { useEffect, useRef, useState } from 'react';
import Crunker from 'crunker';
import styled from 'styled-components';
import { redirect, useParams } from 'react-router-dom';
import { uploadAudio } from '../../api/chats';
import { changeWidthLong } from '../../utils/animations';
import { LoadingLineLong } from '../misc/LoadingLine';
import { PageFrame } from './PageFrame';
import { FiddleLogo } from '../branding/FiddleLogo';

const ConsolidatingPage = styled(PageFrame)`
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Consolidating = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;

const ConsolidationLoadingLine = styled(LoadingLineLong)`
  animation: ${changeWidthLong} 15s ease-out 1;
`;

type ConsolidationProps = {
  id: string;
  oldFile: string;
  newFile: string;
};
export function Consolidation() {
  const { oldFile, newFile, id: chatId } = useParams<ConsolidationProps>();
  const oldAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${oldFile}`;
  const newAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${newFile}`;
  const [consolidatedAudioFileName, setConsolidatedAudioFileName] = useState('');
  const [consolidationDone, setConsolidationDone] = useState(false);
  const author = sessionStorage.getItem('userName');

  const crunkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (crunkerRef.current) {
      let audio = new Crunker();
      audio
        .fetchAudio(oldAudioFileUrl, newAudioFileUrl)
        .then(buffers => audio.mergeAudio(buffers))
        .then(merged => audio.export(merged, 'audio/webm'))
        .then(output => {
          const file_reader = new FileReader();
          const dateOfRecording = Date.now();
          file_reader.readAsDataURL(output.blob);
          file_reader.onloadend = async function() {
            const base64_string = file_reader.result;
            await uploadAudio(base64_string, author, chatId, dateOfRecording);
            setConsolidatedAudioFileName(`${chatId}-${dateOfRecording}-${author}.webm`);
            setConsolidationDone(true);
          };
        })
        .catch((error: Error) => {
          throw new Error(
            `${error.message} - Consolidation of ${oldAudioFileUrl} and ${newAudioFileUrl} failed`
          );
        });
    }
  }, [chatId, author, newAudioFileUrl, oldAudioFileUrl]);

  useEffect(() => {
    if (consolidationDone) {
      setTimeout(
        () => redirect(`/chats/${chatId}/playbackconsolidated/${consolidatedAudioFileName}`),
        2000
      );
    }
  }, [consolidationDone]);

  return (
    <ConsolidatingPage>
      <Consolidating>Consolidating</Consolidating>
      <ConsolidationLoadingLine />
      <FiddleLogo size="small" />
      <div ref={crunkerRef} />
    </ConsolidatingPage>
  );
}
