import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ReportOfOrders from '../pages/ReportOfOrders';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/report" component={ReportOfOrders} isPrivate />
    </Switch>
  );
};

export default Routes;
