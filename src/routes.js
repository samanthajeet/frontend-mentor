import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App'
import SignupForm from './components/SignupForm/SignupForm';
import DarkTheme from './components/LandingDarkTheme/LandingDark';
import ProjectTracking from './components/ProjectTracking/ProjectTracking'
import ToDo from './components/ToDo/ToDo';

export default (
  <Switch>
    <Route path='/' exact component={App} />
    <Route path='/signupform' component={SignupForm} />
    <Route path='/darktheme' component={DarkTheme} />
    <Route path='/projectracking' component={ProjectTracking} />
    <Route path='/todo' component={ToDo} />
  </Switch>
)