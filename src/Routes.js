import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import Explore from './components/Explore';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";



const Header = () => (
  <header>
       <NavLink to={"/"}id={Home}>Home</NavLink>
       <NavLink to={"/explore"}id={Explore}>Explore</NavLink>
  </header>
);

const Routes = (
  <BrowserRouter>
      <div>
          <Header/>
          <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/explore" component={Explore}/>
        
          </Switch>
      </div>
  </BrowserRouter>
      
  );

export default Routes;
