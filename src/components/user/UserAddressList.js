import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchEntities } from '../../actions';
import { selectUser, selectAddressesForUser } from '../../reducers';

class UserAddressList extends Component {
  componentDidMount() {
    this.props.fetchEntities('address');
  }

  render() {
    const { user, addresses, match } = this.props;

    const allAddresses = [
      user.primaryAddress,
      ...addresses
    ].filter(address => address);

    return (
      <div>
        <h1 className="page-header">User Addresses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allAddresses.map(address => (
              <tr key={address.id}>
                <td>{address.id}</td>
                <td><pre>{JSON.stringify(address, null, 2)}</pre></td>
                <td>
                  <Link to={`/users/${match.params.id}`} style={{ marginRight: '10px' }}>Edit</Link>
                  <Link to={`/users`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  user: selectUser(state.users, match.params.id),
  addresses: selectAddressesForUser(state.addresses, match.params.id)
});

export default connect(mapStateToProps, {
  fetchEntities
})(UserAddressList);
