import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CheckList } from './components/CheckList';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checklist" exact>
          <CheckList></CheckList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
