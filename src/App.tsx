import React, { useState } from 'react';
import { AppHeader } from './components/AppHeader'
import { HomePage } from './pages/HomePage'
import { HashRouter, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  
  return (
    <div className="App">
      <AppHeader />
      <HashRouter>
      <Switch>
      <Route path="/" component={HomePage} />        
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
