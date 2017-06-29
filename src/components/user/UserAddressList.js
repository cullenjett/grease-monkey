import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAddresses } from '../../actions/addresses';
import { getUser } from '../../reducers';
import { getAddressesForUser } from '../../reducers';

class UserAddressList extends Component {
  componentDidMount() {
    this.props.fetchAddresses();
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
  user: getUser(state.users, match.params.id),
  addresses: getAddressesForUser(state.addresses, match.params.id)
});

export default connect(mapStateToProps, {
  fetchAddresses
})(UserAddressList);
