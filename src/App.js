import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Users from './components/user/Users';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/users" component={Users} />
            <Redirect from="/" to="/users" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
