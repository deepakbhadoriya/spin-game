import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// private Route
import PrivateRoute from './PrivateRoute';

// pages
import SignUp from '../pages/SignUp';
import SpinGame from '../pages/SpinGame';
import SpinGameResult from '../pages/SpinGameResult';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <PrivateRoute exact path="/spin-game" component={SpinGame} />
      <PrivateRoute exact path="/spin-game-result" component={SpinGameResult} />
    </Switch>
  </Router>
);

export default PageRoutes;
