import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Service from './Service';

import Menu from './Menu';
import ShowCode from './ShowCode';

const App = () => {
return (
  <>
  <Menu/>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/service' component={Service}/>
    <Route exact path='/service/:id' component={ShowCode}/>
    <Route exact path='/contact' component={Contact}/>
    {/* <Redirect exact  component={Home}/> */}

  </Switch>



  </>
);

}

export default App;
