import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PageFrame from './PageFrame';
import FiddleLogo from '../branding/FiddleLogo';

const WelcomePage = styled(PageFrame)`
  justify-content: center;
  align-items: center;
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
