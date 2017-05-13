import React from 'react';

import CrudRoutes from '../CrudRoutes';
import VehicleIndex from './VehicleIndex';
import VehicleShow from './VehicleShow';

const VehicleRoutes = () => (
  <CrudRoutes name="Vehicles" Index={VehicleIndex} Show={VehicleShow} />
);

export default VehicleRoutes;
