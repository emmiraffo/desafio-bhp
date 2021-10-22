import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CheckList  from './components/CheckList';
import Home from './components/Home';
import Calculator from './components/Calculator';
import HarnessOne from './components/HarnessOne';
import HarnessTwo from './components/HarnessTwo';
import HarnessThree from './components/HarnessThree';
import Result from './components/Result';
import WarningDanger from './components/WarningDanger';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/harnessone">
          <HarnessOne />
        </Route>
        <Route path="/resultado" render={(props) => <Result {...props.location.state} />} />
        <Route path="/error">
          <WarningDanger />
        </Route>
        <Route path="/harnesstwo">
          <HarnessTwo />
        </Route>
        <Route path="/harnessthree">
          <HarnessThree />
        </Route>
        <Route path="/calculadora" >
          <Calculator/>
        </Route>
        <Route path="/checklist" >
          <CheckList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
