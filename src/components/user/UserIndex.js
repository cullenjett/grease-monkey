import React, { Component } from 'react';

import SortableTable from '../SortableTable';
import database from '../../database';

class UserEdit extends Component {
  state = {
    search: ''
  }

  handleChangeSearch = (e) => {
    const search = e.target.value;
    this.setState({
      search
    });
  }

  render() {
    const { history } = this.props;
    const { search } = this.state;
    const { users } = database;
    let filteredUsers;

    try {
      filteredUsers = users.filter(user => {
        let userDetailString = [
          user.id,
          user.first_name,
          user.last_name,
          user.email,
          user.activation_state
        ].join("%");

        return userDetailString.match(new RegExp(search, 'gi'));
      });
    } catch (err) {
      filteredUsers = users;
    }

    return (
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
            value={search}
            onChange={this.handleChangeSearch}
          />
          <button className="btn btn-primary pull-right" onClick={() => history.push('/users/new')}>New User</button>
        </div>
        <SortableTable data={filteredUsers} onClickRow={(userId) => history.push(`/users/${userId}`)} />
      </div>
    )
  }
}

export default UserEdit;
