import React from 'react';

//STYLE imports
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './utils/themes';

//STYLE start

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

//STYLE end

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={defaultTheme} />
      <GlobalStyles />
      fiddle
    </AppContainer>
  );
}

export default App;
