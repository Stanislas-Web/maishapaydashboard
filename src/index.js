import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
import {  Route, Switch } from 'react-router-dom';
import { HashRouter, Router } from 'react-router-dom'
import Login from './Login';
import App from './App';

import './assets/scss/style.css';
import 'semantic-ui-css/semantic.min.css'



ReactDOM.render(
  // <HashRouter>
  
  //   <Switch>
  //     {indexRoutes.map((prop, key) => {
  //       return <Route path={prop.path} key={key} component={prop.component} />;
  //     })}
  //   </Switch>
  // </HashRouter>
  // <Login/>
  <App/>
  ,document.getElementById('root')); 
