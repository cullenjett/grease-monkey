import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserForm from './UserForm';
import { createUser } from '../../actions/users';

class UserNew extends Component {
  handleSubmitUserForm = (user) => {
    const { createUser, history } = this.props;
    createUser(user);
    history.push('/users');
  }

  render() {
    return (
      <div>
        <h3 className="page-header">
          Create User
          <Link to="/users" className="pull-right close">X</Link>
        </h3>
        <div className="well">
          <UserForm onSubmit={this.handleSubmitUserForm} />
        </div>
      </div>
    )
  }
}

export default connect(null, {
  createUser
})(UserNew);
