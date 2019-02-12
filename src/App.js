import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './components/Home';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
//  import Hamburger from './components/Hamburger';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <BrowserRouter>
         <Switch>
           <Route exact path="/profile" component={Home}/>
           <Route exact path="/" component={Home}/>
           <Route exact path="/technologies/" component={Technologies}/>
           <Route exact path="/portfolio/" component={Portfolio}/>
         </Switch>
       </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
