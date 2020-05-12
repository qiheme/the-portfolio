import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './app/rootReducer'
import { setCurrentPage } from './app/slices/lifecycleSlice'
import "./App.css";
import { About, Blog, Contact, Home, Portfolio } from "./pages/";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(
    (state: RootState) => state.currentDisplay
  );
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
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route>{"Not found"}</Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
