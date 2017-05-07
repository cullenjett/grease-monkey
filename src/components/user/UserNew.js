import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserForm from './UserForm';

class UserNew extends Component {
  render() {
    const { createUser } = this.props;

    return (
      <div>
        <h3 className="page-header">
          Create User
          <Link to="/users" className="pull-right close">X</Link>
        </h3>
        <div className="well">
          <UserForm onSubmit={createUser} />
        </div>
      </div>
    )
  }
}

export default UserNew;
