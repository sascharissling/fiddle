import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserLogin } from './components/pages/UserLogin';
import { ChatList } from './components/pages/ChatList';
import { Chat } from './components/pages/Chat';
import { NewChat } from './components/pages/NewChat';
import { RecordNewAudio } from './components/pages/RecordNewAudio';
import { PlayAudio } from './components/pages/PlayAudio';
import { OverdubAudio } from './components/pages/OverdubAudio';
import { PlayConsolidatedAudio } from './components/pages/PlayConsolidatedAudio';
import { Consolidation } from './components/pages/Consolidation';
import styled from 'styled-components';
import { FiddleGlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './utils/defaultTheme';

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

export function App() {
  return (
    <AppContainer>
      <FiddleGlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Switch>
            <Route path="/login" exact component={UserLogin} />
            <Route path="/chatslist" exact component={ChatList} />
            <Route path="/chats/new" component={NewChat} />
            <Route path="/chats/:id" exact component={Chat} />
            <Route path="/chats/:id/record" exact component={RecordNewAudio} />
            <Route path="/chats/:id/playback/:fileName" exact component={PlayAudio} />
            <Route path="/chats/:id/overdub/:originalFileName" exact component={OverdubAudio} />
            <Route
              path="/chats/:id/consolidate/:oldFile/:newFile"
              exact
              component={Consolidation}
            />
            <Route
              path="/chats/:id/playbackconsolidated/:fileName"
              component={PlayConsolidatedAudio}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}
