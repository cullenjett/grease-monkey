import React from 'react';
import { Link } from 'react-router-dom';

const Detail = ({ label, data }) => (
  <div className="form-group">
    <label>{label}</label>
    <p>{data}</p>
  </div>
);

const RecordDetails = ({ record, entityName }) => {
  const fieldNames = Object.keys(record);

  return (
    <div>
      <Link to={`/${entityName}/${record.id}/edit`} className="pull-right">Edit</Link>

      {fieldNames.map(fieldName => (
        <Detail
          key={fieldName}
          label={fieldName}
          data={record[fieldName]}
        />
      ))}
    </div>
  );
};

export default RecordDetails;
