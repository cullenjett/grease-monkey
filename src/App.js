import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Users from './components/user/Users';
import SortableTable from './components/SortableTable';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/users" />
            <Route path="/users" component={Users} />
            <Route path="/table" component={SortableTable} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
