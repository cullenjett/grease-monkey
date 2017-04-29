import React, { Component } from 'react';

class User extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(this.form);
    const userDetails = {};

    for (let pair of formData.entries()) {
      userDetails[pair[0]] = pair[1];
    }

    console.log(userDetails);
  }

  render() {
    return (
      <div>
        <h3 className="page-header">Create User</h3>

        <form onSubmit={this.handleSubmit} name="userForm" className="well" ref={(el) => this.form = el}>
          <fieldset>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="first_name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="last_name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" name="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Activation State</label>
              <select name="activation_state" className="form-control">
                <option value="CO">CO</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Create User</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default User;
