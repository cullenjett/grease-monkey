import React, { Component } from 'react';

class SortableTable extends Component {
  state = {
    sortBy: null,
    sortReverse: false,
    data: []
  }

  componentDidMount() {
    const data = [];
    let id = 1;

    for (let i = 0; i < 100; i++) {
      let fakeData = window.faker.helpers.userCard();
      data.push({
        id: id++,
        name: fakeData.name,
        email: fakeData.email,
        phone: fakeData.phone,
        website: fakeData.website
      })
    }

    this.setState({
      data
    });
  }

  setSortBy = (propertyName) => {
    this.setState(prevState => ({
      sortBy: propertyName,
      sortReverse: prevState.sortBy === propertyName ?
        !prevState.sortReverse :
        false
    }));
  }

  getSortedData() {
    const { data, sortBy, sortReverse } = this.state;

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

  onClickRow = (id) => {
    console.log(id);
  }

  render() {
    const { data } = this.state;
    const sortedData = this.getSortedData();
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
            <tr key={data.id} onClick={() => this.onClickRow(data.id)}>
              {dataProperties.map((propertyName, i) => (
                <td key={`${data.id}-${propertyName}`}>{data[propertyName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default SortableTable;
