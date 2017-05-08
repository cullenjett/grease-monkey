import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import UserRoutes from './components/user/UserRoutes';
import VehicleRoutes from './components/vehicle/VehicleRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/users" component={UserRoutes} />
            <Route path="/vehicles" component={VehicleRoutes} />
            <Redirect from="/" to="/users" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
