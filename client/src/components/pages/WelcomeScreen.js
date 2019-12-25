import React from 'react';
import styled from '@emotion/styled';

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
  return (
    <WelcomePage>
      <FiddleLogo />
    </WelcomePage>
  );
}
