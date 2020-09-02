import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FiddleDisplay from '../audioInterface/FiddleDisplay';
import HeaderBar from '../layout/HeaderBar';
import BackButton from '../buttons/BackButton';
import AudioInterfaceWrapper from '../audioInterface/AudioInterfaceWrapper';
import PageFrame from './PageFrame';

export default function PlayAudio(props) {
  const [redirectToOverdub, setRedirectToOverdub] = React.useState(false);
  const chatId = props.match.params.id;
  const fileName = props.match.params.fileName;
  const audioUrl = `https://res.cloudinary.com/fiddle/video/upload/${fileName}`;

  return (
    <PageFrame>
      <HeaderBar>
        <Link to={`/chats/${chatId}`}>
          <BackButton />
        </Link>
      </HeaderBar>
      <AudioInterfaceWrapper>
        <FiddleDisplay audioFileUrl={audioUrl} onClick={() => setRedirectToOverdub(true)} />
        {redirectToOverdub && <Redirect to={`/chats/${chatId}/overdub/${fileName}`} />}
      </AudioInterfaceWrapper>
    </PageFrame>
  );
}

PlayAudio.propTypes = {
  match: PropTypes.object
};
