import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserDetails from './UserDetails';
import { getUser } from '../../reducers/users';

class UserShow extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h3 className="page-header">
          User {user.id}
          <Link to="/users" className="pull-right close">X</Link>
        </h3>
        <UserDetails user={user} />
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  user: getUser(state.users, match.params.id)
});

export default connect(mapStateToProps)(UserShow);
