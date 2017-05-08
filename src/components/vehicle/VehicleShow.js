import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecordDetails from '../RecordDetails';
import { getVehicle } from '../../reducers/vehicles';

class VehicleShow extends Component {
  render() {
    const { vehicle, history } = this.props;

    return (
      <div>
        <h1 className="page-header">
          Vehicle {vehicle.id}
          <Link to="/vehicles" className="pull-right close">X</Link>
        </h1>
        <RecordDetails entityName="vehicles" record={vehicle} />
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  vehicle: getVehicle(state.vehicles, match.params.id)
});

export default connect(mapStateToProps)(VehicleShow);
