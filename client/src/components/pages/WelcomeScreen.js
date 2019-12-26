import React from 'react';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';

//VISUALS imports
import FiddleLogo from '../branding/FiddleLogo';

//STYLE start
const WelcomePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
//STYLE end

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
