import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecordDetails from '../RecordDetails';
import SortableTable from '../SortableTable';
import { fetchUser } from '../../actions';
import { getUser } from '../../reducers';
import { getVehiclesForUser } from '../../reducers';

class UserShow extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const {
      user,
      vehicles,
      history
    } = this.props;

    const userDetails = {...user};
    delete userDetails.primaryAddress;

    return (
      <div>
        <h1 className="page-header">
          User {user.id}
          <Link to="/users" className="pull-right close">X</Link>
        </h1>
        <RecordDetails entityName="users" record={userDetails} />

        <h3>Vehicles</h3>
        <SortableTable
          data={vehicles}
          visibleColumns={[
            'id',
            'year',
            'make',
            'model',
            'color'
          ]}
          onClickRow={(vehicleId) => history.push(`/vehicles/${vehicleId}`)}
        />

        <h3>Addresses</h3>
        <Link to={`/users/${user.id}/addresses`} className="pull-right">All Addresses</Link>
        <label>Primary Address:</label>
        <pre><code>{JSON.stringify(user.primaryAddress, null, 2)}</code></pre>
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  user: getUser(state.users, match.params.id),
  vehicles: getVehiclesForUser(state.vehicles, match.params.id)
});

export default connect(mapStateToProps, {
  fetchUser
})(UserShow);
