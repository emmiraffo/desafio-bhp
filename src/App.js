import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CheckList } from './components/CheckList';
import Home from './components/Home';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/calculadora" >
          <Calculator/>
        </Route>
        <Route path="/checklist" >
          <CheckList></CheckList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
