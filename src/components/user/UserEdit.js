import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserForm from './UserForm';
import database from '../../database';

class UserEdit extends Component {
  render() {
    const { match, editUser } = this.props;
    const user = database.users.find(user => user.id === match.params.id);

    return (
      <div>
        <h3 className="page-header">
          Edit User {match.params.id}
          <Link to={`/users/${match.params.id}`} className="pull-right close">X</Link>
        </h3>
        <div className="well">
          <UserForm onSubmit={editUser} user={user} />
        </div>
      </div>
    )
  }
}

export default UserEdit;
