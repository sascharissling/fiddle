import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';

//COMPONENTS imports
import WelcomeUser from '../headlines/WelcomeUser';
import LoadingLine from '../misc/LoadingLine';
import FiddleSmallLogo from '../branding/FiddleSmallLogo';

//STYLE start

const LoadingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

//STYLE end

export default function LoadingScreen() {
  const [loadingDone, setLoadingDone] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoadingDone(true);
    }, 1450);
  }, []);

  return (
    <LoadingPage>
      <WelcomeUser userName={`${localStorage.getItem('userName')}`} />
      <LoadingLine />
      {loadingDone && <Redirect to={`/chatlist?userName=${localStorage.getItem('userName')}`} />}
      <FiddleSmallLogo />
    </LoadingPage>
  );
}
