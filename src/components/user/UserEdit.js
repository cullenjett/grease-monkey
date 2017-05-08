import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserForm from './UserForm';
import { getUser } from '../../reducers/users';
import { updateUser } from '../../actions/users';

class UserEdit extends Component {
  handleSubmitUserForm = (user) => {
    const { updateUser, history } = this.props;
    updateUser(user);
    history.push(`/users/${user.id}`);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1 className="page-header">
          Edit User {user.id}
          <Link to={`/users/${user.id}`} className="pull-right close">X</Link>
        </h1>
        <div className="well">
          <UserForm onSubmit={this.handleSubmitUserForm} user={user} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  user: getUser(state.users, match.params.id)
});

export default connect(mapStateToProps, {
  updateUser
})(UserEdit);
