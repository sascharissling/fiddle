import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';
import { fadeIn } from '../../utils/animations';
import FiddleLogo from '../branding/FiddleLogo';

const WelcomePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation: ${fadeIn} 0.4s;
`;

export default function WelcomeScreen() {
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  }, []);

  return (
    <>
      {!redirect && (
        <WelcomePage>
          <FiddleLogo />
        </WelcomePage>
      )}

      {redirect && (
        <Redirect to={'/login'}>
          <WelcomePage>
            <FiddleLogo />
          </WelcomePage>
        </Redirect>
      )}
    </>
  );
}
