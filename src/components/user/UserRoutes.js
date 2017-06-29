import React from 'react';
import { Route } from 'react-router-dom';

import CrudRoutes from '../CrudRoutes';
import UserIndex from './UserIndex';
import UserEdit from './UserEdit';
import UserNew from './UserNew';
import UserShow from './UserShow';
import UserAddressList from './UserAddressList';

const UserRoutes = () => (
  <div>
    <CrudRoutes name='Users' Index={UserIndex} New={UserNew} Show={UserShow} Edit={UserEdit} />
    <Route exact path='/users/:id/addresses' component={UserAddressList} />
  </div>
);

export default UserRoutes;
