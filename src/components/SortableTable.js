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
    const visibleData = this.getVisibleColumnData()

    if (!sortBy) {
      return visibleData;
    }

    const sortData = (a, b) => {
      if (a > b) {
        return sortReverse ? -1 : 1;
      }
      if (a < b) {
        return sortReverse ? 1 : -1;
      }
      return 0;
    };

    const sortedData = visibleData.sort((a, b) => {
      const isString = isNaN(a[sortBy]);
      const isNumber = !isNaN(a[sortBy]);

      if (isString) {
        return sortData(a[sortBy].toLowerCase(), b[sortBy].toLowerCase());
      } else if (isNumber) {
        return sortData(+a[sortBy], +b[sortBy]);
      } else {
        return sortData(a[sortBy], b[sortBy]);
      }
    });

    return sortedData;
  }

  getVisibleColumnData() {
    const { data, visibleColumns } = this.props;
    return data.map(datum => {
      return visibleColumns.reduce((acc, columnName) => {
        acc[columnName] = datum[columnName];
        return acc;
      }, {});
    });
  }

  render() {
    const { onClickRow, visibleColumns } = this.props;
    const visibleData = this.getVisibleColumnData();
    const sortedData = this.sortData(visibleData);

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {visibleColumns.map(propertyName => (
              <th
                key={propertyName}
                onClick={() => this.setSortBy(propertyName)}
              >
                {capitalize(propertyName)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 &&
            <tr>
              <td colSpan={visibleColumns.length} style={{textAlign: 'center'}}>No data</td>
            </tr>
          }

          {sortedData.map(data => (
            <SortableTableRow
              key={data.id}
              data={data}
              dataProperties={visibleColumns}
              onClick={() => onClickRow(data.id)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default SortableTable;

function capitalize(str) {
  let frags = str.split('_');
  for (let i=0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}
