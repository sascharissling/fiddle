import React from 'react';

//STYLE imports
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';

function App() {
  return (
    <AppContainer>
      <ThemeProvider />
      <GlobalStyles />
      fiddle
    </AppContainer>
  );
}

export default App;

//STYLED COMPONENTS start

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

//STYLED COMPONENTS end
