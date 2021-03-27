import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from './routes';

import StyledTheme from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import FunZone from './pages/FunZone/FunZone';

interface AppProps {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <StyledTheme>
        <Router>
          <Switch>
            <Route path={routes.HOME}><Home /></Route>
            <Route path={routes.GALLERY}><Gallery /></Route>
            <Route path={routes.FUN_ZONE}><FunZone /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </Router>
      </StyledTheme>
      <GlobalStyle />
    </>
  )
}

export default App;
