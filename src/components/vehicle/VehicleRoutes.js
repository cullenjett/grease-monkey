import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VehicleIndex from './VehicleIndex';

const VehicleRoutes = () => (
  <section className="row">
    <div className="col-xs-12">
      <Switch>
        <Route exact path="/vehicles" component={VehicleIndex}/>
      </Switch>
    </div>
  </section>
);

export default VehicleRoutes;
