import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserForm from './UserForm';
import { createEntity } from '../../actions';

class UserNew extends Component {
  handleSubmitUserForm = (user) => {
    const { createEntity, history } = this.props;
    
    createEntity('user', user);
    history.push('/users');
  }

  render() {
    return (
      <div>
        <h1 className="page-header">
          Create User
          <Link to="/users" className="pull-right close">X</Link>
        </h1>
        <div className="well">
          <UserForm onSubmit={this.handleSubmitUserForm} />
        </div>
      </div>
    )
  }
}

export default connect(null, {
  createEntity
})(UserNew);
