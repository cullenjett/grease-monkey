import React, { Component } from 'react';

import SortableTableRow from './SortableTableRow';

class SortableTable extends Component {
  state = {
    sortBy: null,
    sortReverse: false
  }

  setSortBy = (propertyName) => {
    this.setState(prevState => ({
      sortBy: propertyName,
      sortReverse: prevState.sortBy === propertyName ?
        !prevState.sortReverse :
        false
    }));
  }

  sortData(data) {
    const { sortBy, sortReverse } = this.state;

    if (!sortBy) {
      return data;
    }

    const sortedData = data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return sortReverse ? -1 : 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return sortReverse ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }

  render() {
    const { data, onClickRow } = this.props;
    const sortedData = this.sortData(data);
    const dataProperties = data[0] ? Object.keys(data[0]) : []

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {dataProperties.map(propertyName => (
              <th
                key={propertyName}
                onClick={() => this.setSortBy(propertyName)}
              >
                {propertyName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(data => (
            <SortableTableRow
              key={data.id}
              data={data}
              dataProperties={dataProperties}
              onClick={() => onClickRow(data.id)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default SortableTable;
