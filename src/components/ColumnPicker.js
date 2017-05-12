import React, { Component } from 'react';

class ColumnPicker extends Component {
  render() {
    const { columns, onChange } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Choose the columns to display</div>
        <div className="panel-body">
          {Object.keys(columns).map(column => (
            <div key={column} className="checkbox">
              <label>
                <input type="checkbox" name={column} onChange={onChange} checked={columns[column]} /> {column}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ColumnPicker;
