import React from 'react';
import Crunker from 'crunker';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { uploadAudio } from '../../api/chats';
import { changeWidthLong } from '../../utils/animations';
import { fadeIn } from '../../utils/animations';

//COMPONENTS imports
import { LoadingLineLong } from '../misc/LoadingLine';
import FiddleSmallLogo from '../branding/FiddleSmallLogo';

//STYLE start

const ConsolidatingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation: ${fadeIn} 0.05s;
`;

const Consolidating = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
`;

const ConsolidationLoadingLine = styled(LoadingLineLong)`
  animation: ${changeWidthLong} 15s ease-out 1;
`;

//STYLE end

export default function Consolidation(props) {
  const oldAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${props.match.params.oldFile}`;
  const newAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${props.match.params.newFile}`;
  const [consolidatedAudioFileName, setConsolidatedAudioFileName] = React.useState('');
  const [consolidationDone, setConsolidationDone] = React.useState(false);
  const chatId = props.match.params.id;
  const author = sessionStorage.getItem('userName');

  const crunkerRef = React.useRef();

  React.useEffect(() => {
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
        .catch(error => {
          throw new Error(error);
        });
    }
  }, [chatId, author, newAudioFileUrl, oldAudioFileUrl]);

  return (
    <ConsolidatingPage>
      <Consolidating>Consolidating</Consolidating>
      <ConsolidationLoadingLine />
      <FiddleSmallLogo />
      {!consolidationDone && <div ref={crunkerRef} />}
      {consolidationDone && (
        <Redirect to={`/chats/${chatId}/playbackconsolidated/${consolidatedAudioFileName}`} />
      )}
    </ConsolidatingPage>
  );
}

Consolidation.propTypes = {
  match: PropTypes.object
};
