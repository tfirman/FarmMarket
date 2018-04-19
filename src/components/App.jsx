import React from 'react';
import Header from './Header';
import Averys from './Averys';
import Locations from './Locations';
import Selection from './Selection';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Averys} />
        <Route path='/locations' component={Locations} />
        <Route path='/selection' component={Selection} />
      </Switch>
    </div>
  );
}

export default App;
