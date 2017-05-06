import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Users from './components/user/Users';
import Vehicles from './components/vehicle/Vehicles';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/vehicles" component={Vehicles} />
            <Redirect from="/" to="/users" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
