import React from 'react';

const SortableTableRow = ({ onClick, data, dataProperties }) => (
  <tr onClick={() => onClick(data.id)}>
    {dataProperties.map((propertyName, i) => (
      <td key={`${data.id}-${propertyName}`}>{data[propertyName]}</td>
    ))}
  </tr>
);

export default SortableTableRow;
