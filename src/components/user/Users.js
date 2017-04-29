import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import UserTable from './UserTable';
import UserForm from './UserForm';

const initialState = {
  users: [
    {
      id: 1,
      first_name: 'Cullen',
      last_name: 'Jett',
      email: 'cullenjett@gmail.com',
      password: 'Password1',
      activation_state: 'CO'
    }
  ]
};

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleClickUserRow = (user) => {
    this.props.history.push(`/users/${user.id}`);
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
                <UserForm onSubmit={this.handleEditUser} user={this.state.users.find(user => user.id === +match.params.id)} />
              </div>
            </div>
          )}/>
        </div>
      </section>
    )
  }
}

export default Users;
