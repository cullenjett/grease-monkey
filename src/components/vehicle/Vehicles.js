import React, { Component } from 'react';

import SortableTable from '../SortableTable';
import database from '../../database';

class Vehicles extends Component {
  state = {
    vehicles: database.vehicles,
    search: ''
  }

  render() {
    return <SortableTable data={this.state.vehicles} />
  }
}

export default Vehicles;
