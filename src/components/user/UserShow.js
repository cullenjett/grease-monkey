import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserDetails from './UserDetails';
import database from '../../database';

class UserShow extends Component {
  render() {
    const { match } = this.props;
    const user = database.users.find(user => user.id === match.params.id);

    return (
      <div>
        <h3 className="page-header">
          User {match.params.id}
          <Link to="/users" className="pull-right close">X</Link>
        </h3>
        <UserDetails user={user} />
      </div>
    )
  }
}

export default UserShow;
