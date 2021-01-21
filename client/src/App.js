import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join'

import './App.css';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Join}/>
        <Route exact path="/Chat" component={Chat}/>
      </Switch>      
    </div>
  );
}

export default App;
