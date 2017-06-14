import React, { Component } from 'react';
import { connect } from 'react-redux';

import SortableTable from '../SortableTable';
import ColumnPicker from '../ColumnPicker';
import { getAllUsers } from '../../reducers/users';
import { fetchUsers } from '../../actions/users';

class UserIndex extends Component {
  state = {
    search: '',
    columns: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      password: false,
      activation_state: true
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleChangeSearch = (e) => {
    const search = e.target.value;

    this.setState({
      search
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

  getFilteredUsers() {
    const { users } = this.props;
    const { search, columns } = this.state;
    const filteredUsers = users.filter(user => {
      let userDetailString = Object.keys(columns).reduce((acc, column) => {
        if (columns[column] === true) {
          acc.push(user[column].toLowerCase());
        }

        return acc;
      }, []).join("%");

      return userDetailString.includes(search.toLowerCase());
    });

    return filteredUsers;
  }

  render() {
    const { history } = this.props;
    const { search, columns } = this.state;
    const filteredUsers = this.getFilteredUsers();
    const visibleColumns = Object.keys(columns).filter(column => columns[column] === true)

    return (
      <div>
        <h1 className="page-header">Users</h1>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={search}
                onChange={this.handleChangeSearch}
              />
            </div>

            <ColumnPicker
              columns={columns}
              onChange={this.handleChangeSelectedColumns}
            />
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <button className="btn btn-primary pull-right" onClick={() => history.push('/users/new')}>New User</button>
            </div>
          </div>
        </div>

        <SortableTable
          data={filteredUsers}
          visibleColumns={visibleColumns}
          onClickRow={(userId) => history.push(`/users/${userId}`)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getAllUsers(state.users)
});

export default connect(mapStateToProps, {
  fetchUsers
})(UserIndex);
