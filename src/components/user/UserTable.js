import React from 'react';

import SortableTable from '../SortableTable';

const UserTable = ({ users, onClick }) => (
  <SortableTable data={users} onClickRow={onClick} />
);

export default UserTable;
