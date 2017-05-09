import React, { Component } from 'react';
import { connect } from 'react-redux';

import SortableTable from '../SortableTable';
import { getAllUsers } from '../../reducers/users';

class UserIndex extends Component {
  state = {
    search: '',
    filteredUsers: this.props.users
  }

  handleChangeSearch = (e) => {
    const search = e.target.value;
    const { users } = this.props;
    const filteredUsers = users.filter(user => {
      let userDetailString = [
        user.id.toLowerCase(),
        user.first_name.toLowerCase(),
        user.last_name.toLowerCase(),
        user.email.toLowerCase(),
        user.activation_state.toLowerCase()
      ].join("%");

      return userDetailString.includes(search.toLowerCase());
    });

    this.setState({
      search,
      filteredUsers
    });
  }

  render() {
    const { history } = this.props;
    const { search, filteredUsers } = this.state;

    return (
      <div>
        <h1 className="page-header">Users</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            style={{
              maxWidth: '400px',
              display: 'inline-block'
            }}
            placeholder="Search..."
            value={search}
            onChange={this.handleChangeSearch}
          />
          <button className="btn btn-primary pull-right" onClick={() => history.push('/users/new')}>New User</button>
        </div>
        <SortableTable
          data={filteredUsers}
          visibleColumns={[
            'id',
            'first_name',
            'last_name',
            'email',
            'activation_state'
          ]}
          onClickRow={(userId) => history.push(`/users/${userId}`)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: getAllUsers(state.users)
});

export default connect(mapStateToProps)(UserIndex);
