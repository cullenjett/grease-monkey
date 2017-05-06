import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import database from '../../database';

import UserTable from './UserTable';
import UserForm from './UserForm';

class Users extends Component {
  state = {
    users: database.users,
    search: ''
  }

  handleChangeSearch = (e) => {
    const search = e.target.value;
    this.setState({
      search
    });
  }

  handleClickNewUser = () => {
    this.props.history.push('/users/new');
  }

  handleClickUserRow = (userId) => {
    this.props.history.push(`/users/${userId}/edit`);
  }

  handleCreateUser = (userDetails) => {
    this.setState((prevState) => ({
      users: prevState.users.concat(userDetails)
    }));
    this.props.history.push('/users');
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
    const { users, search } = this.state
    const filteredUsers = users.filter(user => {
      let userDetailString = [
        user.id,
        user.first_name,
        user.last_name,
        user.email,
        user.activation_state
      ].join("%");

      return userDetailString.match(new RegExp(search, 'gi'));
    });

    return (
      <section className="row">
        <div className="col-xs-12">
          <Route exact path="/users" render={() => (
            <div>
              <h3 className="page-header">Users</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  style={{
                    maxWidth: '500px',
                    display: 'inline-block'
                  }}
                  placeholder="Search..."
                  onChange={this.handleChangeSearch}
                />
                <button className="btn btn-primary pull-right" onClick={this.handleClickNewUser}>New User</button>
              </div>
              <UserTable users={filteredUsers} onClick={this.handleClickUserRow} />
            </div>
          )}/>

          <Route exact path="/users/new" render={() => (
            <div>
              <h3 className="page-header">
                Create User
                <Link to="/users" className="pull-right close">X</Link>
              </h3>
              <div className="well">
                <UserForm onSubmit={this.handleCreateUser} />
              </div>
            </div>
          )}/>

          <Route exact path="/users/:id/edit" render={({ match }) => (
            <div>
              <h3 className="page-header">
                Edit User {match.params.id}
                <Link to="/users" className="pull-right close">X</Link>
              </h3>
              <div className="well">
                <UserForm onSubmit={this.handleEditUser} user={users.find(user => user.id === match.params.id)} />
              </div>
            </div>
          )}/>
        </div>
      </section>
    )
  }
}

export default Users;
