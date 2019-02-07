import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './components/Home';
import Technologies from './components/Technologies';
// import Hamburger from './components/Hamburger';

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //  <BrowserRouter>
      //    <Switch>
      //      <Route exact path="/" component={Home}/>
      //      <Route exact path="/technologies/" component={Technologies}/>
      //    </Switch>
      //  </BrowserRouter>
      // </React.Fragment>
      <Fragment>
        <Technologies/>
        <Home/>
      </Fragment>
    );
  }
}

export default App;
