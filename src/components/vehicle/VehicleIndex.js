import React, { Component } from 'react';
import { connect } from 'react-redux';

import SortableTable from '../SortableTable';
import { getAllVehicles } from '../../reducers/vehicles';

class VehicleIndex extends Component {
  state = {
    search: '',
    filteredVehicles: this.props.vehicles
  }

  handleChangeSearch = (e) => {
    const search = e.target.value;
    const { vehicles } = this.props;
    const filteredVehicles = vehicles.filter(vehicle => {
      let vehicleDetailString = [
        vehicle.id.toLowerCase(),
        vehicle.make.toLowerCase(),
        vehicle.model.toLowerCase(),
        vehicle.color.toLowerCase(),
        vehicle.year.toString().toLowerCase()
      ].join("%");

      return vehicleDetailString.includes(search.toLowerCase());
    });

    this.setState({
      search,
      filteredVehicles
    });
  }

  render() {
    const { history } = this.props;
    const { search, filteredVehicles } = this.state;

    return (
      <div>
        <h3 className="page-header">Vehicles</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            style={{
              maxWidth: '500px',
              display: 'inline-block'
            }}
            placeholder="Search..."
            value={search}
            onChange={this.handleChangeSearch}
          />
          <button className="btn btn-primary pull-right" onClick={() => history.push('/vehicles/new')}>New Vehicle</button>
        </div>
        <SortableTable data={filteredVehicles} onClickRow={(vehicleId) => history.push(`/vehicles/${vehicleId}`)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vehicles: getAllVehicles(state.vehicles)
});

export default connect(mapStateToProps)(VehicleIndex);
