import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import { RecycleFunction } from '../views';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/recycle"component={RecycleFunction} />
    </Switch>
  );
};

export default RoutesView;
