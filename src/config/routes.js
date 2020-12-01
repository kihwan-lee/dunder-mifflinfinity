import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import NewEmployee from '../pages/NewEmployee';
import MyProfile from '../pages/MyProfile';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/login' component={ Login } />
    <Route path='/newEmployee' component={ NewEmployee } />
    <Route path='/myProfile' component={ MyProfile } />
  </Switch>
)