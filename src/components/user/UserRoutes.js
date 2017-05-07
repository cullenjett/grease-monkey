import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserIndex from './UserIndex';
import UserEdit from './UserEdit';
import UserNew from './UserNew';
import UserShow from './UserShow';

const UserRoutes = () => (
  <section className="row">
    <div className="col-xs-12">
      <Switch>
        <Route exact path="/users" component={UserIndex}/>
        <Route exact path="/users/new" component={UserNew}/>
        <Route exact path="/users/:id" component={UserShow}/>
        <Route exact path="/users/:id/edit" component={UserEdit}/>
      </Switch>
    </div>
  </section>
);

export default UserRoutes;
