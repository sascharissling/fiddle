import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { PageFrame } from './PageFrame';
import { FiddleLogo } from '../branding/FiddleLogo';

const WelcomePage = styled(PageFrame)`
  justify-content: center;
  align-items: center;
`;

export function WelcomeScreen() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Todo: actual loading logic that isnt mocked
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
