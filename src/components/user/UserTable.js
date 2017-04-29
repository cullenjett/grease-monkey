import React from 'react';

const UserTable = ({ users, onClick }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Activation State</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr onClick={() => onClick(user)} key={user.id}>
          <td>{`${user.first_name} ${user.last_name}`}</td>
          <td>{user.email}</td>
          <td>{user.activation_state}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
