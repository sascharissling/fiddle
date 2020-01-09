import React from 'react';
import Crunker from 'crunker';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { uploadAudio } from '../../api/chats';

//COMPONENTS imports
import ConsolidatingHeadline from '../headlines/ConsolidatingHeadline';
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
`;

//STYLE end

export default function Consolidation(props) {
  const oldAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${props.match.params.oldFile}`;
  const newAudioFileUrl = `https://res.cloudinary.com/fiddle/video/upload/${props.match.params.newFile}`;
  const [consolidatedAudioFileName, setConsolidatedAudioFileName] = React.useState('');
  const [consolidationDone, setConsolidationDone] = React.useState(false);
  const chatId = props.match.params.id;
  const author = localStorage.getItem('userName');

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
            return base64_string;
          };
          setConsolidatedAudioFileName(`${chatId}-${dateOfRecording}-${author}.webm`);
          setTimeout(() => setConsolidationDone(true), 1500);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }, [chatId, author, newAudioFileUrl, oldAudioFileUrl]);

  return (
    <ConsolidatingPage>
      <ConsolidatingHeadline />
      <LoadingLineLong />
      <FiddleSmallLogo />
      {!consolidationDone && <div ref={crunkerRef} />}
      {consolidationDone && (
        <Redirect to={`/playConsolidatedAudio/${chatId}/${consolidatedAudioFileName}`} />
      )}
    </ConsolidatingPage>
  );
}

Consolidation.propTypes = {
  match: PropTypes.object
};
