import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeScreen from './components/pages/WelcomeScreen';
import UserLogin from './components/pages/UserLogin';
import ChatList from './components/pages/ChatList';
import Chat from './components/pages/Chat';
import NewChat from './components/pages/NewChat';
import RecordNewAudio from './components/pages/RecordNewAudio';
import PlayAudio from './components/pages/PlayAudio';
import OverdubAudio from './components/pages/OverdubAudio';
import PlayConsolidatedAudio from './components/pages/PlayConsolidatedAudio';
import Consolidation from './components/pages/Consolidation';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './utils/defaultTheme';

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route data-test-id="welcome-page" path="/" exact component={WelcomeScreen} />
            <Route data-test-id="login-page" path="/login" exact component={UserLogin} />
            <Route data-test-id="chatslist" path="/chatslist" exact component={ChatList} />
            <Route data-test-id="create-new-chat" path="/chats/new" component={NewChat} />
            <Route data-test-id="chat" path="/chats/:id" exact component={Chat} />
            <Route
              data-test-id="record-new-audio"
              path="/chats/:id/record"
              exact
              component={RecordNewAudio}
            />
            <Route
              data-test-id="play-audio"
              path="/chats/:id/playback/:fileName"
              exact
              component={PlayAudio}
            />
            <Route
              data-test-id="overdub-audio"
              path="/chats/:id/overdub/:originalFileName"
              exact
              component={OverdubAudio}
            />
            <Route
              data-test-id="consolidation"
              path="/chats/:id/consolidate/:oldFile/:newFile"
              exact
              component={Consolidation}
            />
            <Route
              data-test-id="play-consolidated-audio"
              path="/chats/:id/playbackconsolidated/:fileName"
              component={PlayConsolidatedAudio}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
