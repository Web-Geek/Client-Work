import React from 'react'
import { Switch, Route } from 'react-router'
import Landingpage from './pages/Landingpage'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
            <Landingpage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
