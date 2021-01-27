import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Welcome, Home, Login, Signup, Recycle } from '../views';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signUp' component={Signup}/>
      <Route exact path='/recycle' component={Recycle}/>
    </Switch>
  );
};

export default RoutesView;
