import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import UserTable from './UserTable';
import UserForm from './UserForm';

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const users = [];
    let id = 1;

    for (let i = 0; i < 100; i++) {
      users.push({
        id: id++,
        first_name: window.faker.name.firstName(),
        last_name: window.faker.name.lastName(),
        email: window.faker.internet.email(),
        password: window.faker.internet.password(),
        activation_state: window.faker.address.stateAbbr()
      })
    }

    this.setState({
      users
    });
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
