import React, { useEffect } from 'react';
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
import StoreProvider from './store/provider';
import Web3Provider from './components/Web3Provider/Web3Provider';

interface AppProps {};

const App: React.FC<AppProps> = () => {

  return (
    <>
      <StyledTheme>
        <StoreProvider>
          <Web3Provider>
            <Router>
              <Switch>
                <Route path={routes.HOME}><Home /></Route>
                <Route path={routes.GALLERY}><Gallery /></Route>
                <Route path={routes.FUN_ZONE}><FunZone /></Route>
                <Route path='/'><Home /></Route>
              </Switch>
            </Router>
          </Web3Provider>
        </StoreProvider>
      </StyledTheme>
      <GlobalStyle />
    </>
  )
}

export default App;
