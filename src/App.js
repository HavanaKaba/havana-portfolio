import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Web from './pages/Web';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() =>(
          <Home />
        )} />
        <Route exact path='/web' render={() =>(
          <Web />
        )} />
        <Route exact path='/apps' render={() =>(
          <Apps />
        )} />
        <Route exact path='/contact' render={() =>(
          <Contact />
        )} />
        <Route render={() =>(
          <NotFound />
        )} />

      </Switch>
    );
  }
}

export default App;
