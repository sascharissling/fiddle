import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//COMPONENTS imports
import WelcomeScreen from './components/pages/WelcomeScreen';
import UserLogin from './components/pages/UserLogin';

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
      <Router>
        <ThemeProvider theme={defaultTheme} />
        <GlobalStyles />
        <Route path="/" exact>
          <WelcomeScreen />
        </Route>
        <Route path="/login" exact>
          <UserLogin />
        </Route>
      </Router>
    </AppContainer>
  );
}

export default App;
