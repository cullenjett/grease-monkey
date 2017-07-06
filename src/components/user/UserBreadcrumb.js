import React from 'react';
import { connect } from 'react-redux';

import { selectUser } from '../../reducers';

const UserBreadcrumb = ({ id, user }) => (
  <span>{user.first_name} {user.last_name}</span>
);

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(state.users, ownProps.id)
});

export default connect(mapStateToProps)(UserBreadcrumb);
