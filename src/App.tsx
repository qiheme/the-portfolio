import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <Router>
        <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          {"Not found"}
        </Route>
      </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;
