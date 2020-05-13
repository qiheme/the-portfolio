import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux'
import { RootState } from './app/rootReducer'
import { setCurrentStatus } from './app/slices/lifecycleSlice'
import "./App.css";
import { About, Blog, Contact, Home, Portfolio } from "./pages/";

const App: React.FC = () => {
  const dispatch = useDispatch();
  // const { page } = useSelector(
  //   (state: RootState) => state.currentDisplay
  // );

   // It takes a function
   useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    dispatch(setCurrentStatus('loaded'));
  });
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

// const mapStateToProps = function(state: RootState) {
//   return {
//     page: state.currentDisplay.page,
//     status: state.currentDisplay.status
//   }
// }

// export default connect(mapStateToProps)(App);

export default App;
