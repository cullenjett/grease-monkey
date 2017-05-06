import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ user }) => (
  <div>
    <Link to={`/users/${user.id}/edit`} className="pull-right">Edit</Link>

    <div className="form-group">
      <label>First Name</label>
      <p>{user.first_name}</p>
    </div>
    <div className="form-group">
      <label>Last Name</label>
      <p>{user.last_name}</p>
    </div>
    <div className="form-group">
      <label>Email</label>
      <p>{user.email}</p>
    </div>
    <div className="form-group">
      <label>Password</label>
      <p>{user.password}</p>
    </div>
    <div className="form-group">
      <label>Activation State</label>
      <p>{user.activation_state}</p>
    </div>
  </div>
);

export default UserDetails;
