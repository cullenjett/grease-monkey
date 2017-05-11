import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecordDetails from '../RecordDetails';
import SortableTable from '../SortableTable';
import { getUser } from '../../reducers/users';
import { getVehiclesForUser } from '../../reducers/vehicles';

class UserShow extends Component {
  render() {
    const { user, vehicles, history } = this.props;

    return (
      <div>
        <h1 className="page-header">
          User {user.id}
          <Link to="/users" className="pull-right close">X</Link>
        </h1>
        <RecordDetails entityName="users" record={user} />

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
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  user: getUser(state.users, match.params.id),
  vehicles: getVehiclesForUser(state.vehicles, match.params.id)
});

export default connect(mapStateToProps)(UserShow);
