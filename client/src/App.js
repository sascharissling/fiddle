import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//PAGES imports
import WelcomeScreen from './components/pages/WelcomeScreen';
import UserLogin from './components/pages/UserLogin';
import LoadingScreen from './components/pages/LoadingScreen';
import ChatList from './components/pages/ChatList';
import Chat from './components/pages/Chat';
import NewChat from './components/pages/NewChat';
import RecordNewAudio from './components/pages/RecordNewAudio';
import PlayAudio from './components/pages/PlayAudio';
import OverdubAudio from './components/pages/OverdubAudio';
import PlayConsolidatedAudio from './components/pages/PlayConsolidatedAudio';

//STYLE imports
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './utils/defaultTheme';
import Consolidation from './components/pages/Consolidation';

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
            <Route path="/newChat" component={NewChat} />
            <Route path="/recordNewAudio/:id/:userName" component={RecordNewAudio} />
            <Route path="/playAudio/:id/:fileName" exact component={PlayAudio} />
            <Route path="/overdubAudio/:id/:originalFileName" component={OverdubAudio} />
            <Route path="/consolidation/:id/:oldFile/:newFile" component={Consolidation} />
            <Route path="/playConsolidatedAudio/:id/:fileName" component={PlayConsolidatedAudio} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
