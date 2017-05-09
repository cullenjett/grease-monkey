import React from 'react';
import { Switch, Route } from 'react-router-dom';

const CrudRoutes = ({ name, Index, New, Show, Edit }) => (
  <div>
    <Switch>
      <Route exact path={`/${name.toLowerCase()}`} component={Index}/>
      <Route exact path={`/${name.toLowerCase()}/new`} component={New}/>
      <Route exact path={`/${name.toLowerCase()}/:id`} component={Show}/>
      <Route exact path={`/${name.toLowerCase()}/:id/edit`} component={Edit}/>
    </Switch>
  </div>
);

export default CrudRoutes;
