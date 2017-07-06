import React, { Component } from 'react';
import {
  HashRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';
import UserRoutes from './components/user/UserRoutes';
import VehicleRoutes from './components/vehicle/VehicleRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Breadcrumbs />
              <div className="list-group">
                <NavLink to="/users" className="list-group-item" activeClassName="active">Users</NavLink>
                <NavLink to="/vehicles" className="list-group-item" activeClassName="active">Vehicles</NavLink>
              </div>
            </div>

            <div className="col-sm-9">
              <Switch>
                <Route path="/users" component={UserRoutes} />
                <Route path="/vehicles" component={VehicleRoutes} />
                <Route render={() => <h1 className="page-header">Grease Monkey</h1>} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
