import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App'
import SignupForm from './components/SignupForm/SignupForm';

export default (
  <Switch>
    <Route path='/' exact component={App} />
    <Route path='/signupform' component={SignupForm} />
  </Switch>
)