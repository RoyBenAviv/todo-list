import React from 'react';
import { AppHeader } from './components/AppHeader'
import { HomePage } from './pages/HomePage'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { TodoEdit } from './pages/TodoEdit'

const App: React.FC = () => {
  
  return (
    <main>
      <AppHeader />
      <HashRouter>
      <Switch>
      <Route path='/todo/edit/:id?' component={TodoEdit} />
      <Route path="/" component={HomePage} />        
      </Switch>
      </HashRouter>
    </main>
  );
}

export default App;
