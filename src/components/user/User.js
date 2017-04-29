import React, { Component } from 'react';

import UserTable from './UserTable';
import UserForm from './UserForm';

const initialState = {
  users: [
    {
      id: 1,
      first_name: 'Cullen',
      last_name: 'Jett',
      email: 'cullenjett@gmail.com',
      activation_state: 'CO'
    }
  ]
};

class User extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleClickUserRow = (user) => {
    console.log(user);
  }

  handleCreateUser = (userDetails) => {
    userDetails.id = Date.now();

    this.setState((prevState) => ({
      users: prevState.users.concat(userDetails)
    }));
  }

  render() {
    return (
      <section className="row">
        <div className="col-sm-8">
          <h3 className="page-header">Users</h3>
          <UserTable users={this.state.users} onClick={this.handleClickUserRow} />
        </div>

        <div className="col-sm-4">
          <h3 className="page-header">Create User</h3>
          <div className="well">
            <UserForm onSubmit={this.handleCreateUser} />
          </div>
        </div>
      </section>
    )
  }
}

export default User;
