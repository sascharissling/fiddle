import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//PAGES imports
import WelcomeScreen from './components/pages/WelcomeScreen';
import UserLogin from './components/pages/UserLogin';
import LoadingScreen from './components/pages/LoadingScreen';
import ChatList from './components/pages/ChatList';
import Chat from './components/pages/Chat';

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
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact component={WelcomeScreen} />
            <Route path="/login" component={UserLogin} />
            <Route path="/loading" component={LoadingScreen} />
            <Route path="/chatlist" component={ChatList} />
            <Route path="/chat/:id" component={Chat} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
