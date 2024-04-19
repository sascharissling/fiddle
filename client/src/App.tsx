import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route path="/login" Component={UserLogin} />
          <Route path="/chatslist" Component={ChatList} />
          <Route path="/chats/new" Component={NewChat} />
          <Route path="/chats/:id" Component={Chat} />
          <Route path="/chats/:id/record" Component={RecordNewAudio} />
          <Route path="/chats/:id/playback/:fileName" Component={PlayAudio} />
          <Route path="/chats/:id/overdub/:originalFileName" Component={OverdubAudio} />
          <Route path="/chats/:id/consolidate/:oldFile/:newFile" Component={Consolidation} />
          <Route
            path="/chats/:id/playbackconsolidated/:fileName"
            Component={PlayConsolidatedAudio}
          />
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}
