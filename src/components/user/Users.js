import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import database from '../../database';

import UserTable from './UserTable';
import UserForm from './UserForm';

class Users extends Component {
  state = {
    users: database.users
  }

  handleClickUserRow = (userId) => {
    this.props.history.push(`/users/${userId}`);
  }

  handleCreateUser = (userDetails) => {
    this.setState((prevState) => ({
      users: prevState.users.concat(userDetails)
    }));
  }

  handleEditUser = (userDetails) => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === userDetails.id) {
          return userDetails;
        }

        return user;
      })
    }));

    this.props.history.push('/users');
  }

  render() {
    return (
      <section className="row">
        <div className="col-sm-8">
          <h3 className="page-header">Users</h3>
          <UserTable users={this.state.users} onClick={this.handleClickUserRow} />
        </div>

        <div className="col-sm-4">
          <Route exact path="/users" render={() => (
            <div>
              <h3 className="page-header">Create User</h3>
              <div className="well">
                <UserForm onSubmit={this.handleCreateUser} />
              </div>
            </div>
          )}/>

          <Route exact path="/users/:id" render={({ match }) => (
            <div>
              <h3 className="page-header">
                Edit User
                <Link to="/users" className="pull-right close">X</Link>
              </h3>
              <div className="well">
                <UserForm onSubmit={this.handleEditUser} user={this.state.users.find(user => user.id === match.params.id)} />
              </div>
            </div>
          )}/>
        </div>
      </section>
    )
  }
}

export default Users;
