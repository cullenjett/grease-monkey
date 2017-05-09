import React from 'react';

import CrudRoutes from '../../CrudRoutes';
import UserIndex from './UserIndex';
import UserEdit from './UserEdit';
import UserNew from './UserNew';
import UserShow from './UserShow';

const UserRoutes = () => (
  <CrudRoutes name="Users" Index={UserIndex} New={UserNew} Show={UserShow} Edit={UserEdit} />
);

export default UserRoutes;
