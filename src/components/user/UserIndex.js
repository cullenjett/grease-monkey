import React, { Component } from 'react';
import { connect } from 'react-redux';

import SortableTable from '../SortableTable';
import ColumnPicker from '../ColumnPicker';
import { getAllUsers } from '../../reducers/users';

class UserIndex extends Component {
  state = {
    search: '',
    filteredUsers: this.props.users,
    columns: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      password: false,
      activation_state: true
    }
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

  handleChangeSelectedColumns = (e) => {
    const columnName = e.target.name;
    const isChecked = e.target.checked;
    const newColumns = {
      ...this.state.columns,
      [columnName]: isChecked
    };

    this.setState({
      columns: newColumns
    });
  }

  render() {
    const { history } = this.props;
    const { search, filteredUsers, columns } = this.state;
    const visibleColumns = Object.keys(columns).filter(column => columns[column] === true)

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
        <ColumnPicker
          columns={columns}
          onChange={this.handleChangeSelectedColumns}
        />
        <SortableTable
          data={filteredUsers}
          visibleColumns={visibleColumns}
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
