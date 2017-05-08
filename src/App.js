import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div className="list-group" style={{marginTop: '88px'}}>
                <NavLink to="/users" className="list-group-item" activeClassName="active">Users</NavLink>
                <NavLink to="/vehicles" className="list-group-item" activeClassName="active">Vehicles</NavLink>
              </div>
            </div>

            <div className="col-sm-9">
              <Switch>
                <Route path="/users" component={UserRoutes} />
                <Route path="/vehicles" component={VehicleRoutes} />
                <Redirect from="/" to="/users" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
