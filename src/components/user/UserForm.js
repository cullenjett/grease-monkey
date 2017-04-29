import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { user = {}, onSubmit } = this.props;
    const formData = new FormData(this.form);
    const userDetails = {};

    for (let pair of formData.entries()) {
      userDetails[pair[0]] = pair[1];
    }

    if (user.id) {
      userDetails.id = user.id;
    } else {
      userDetails.id = Date.now();
    }

    onSubmit(userDetails);
    this.form.reset();
  }

  render() {
    const { user = {} } = this.props;

    return (
      <form onSubmit={this.handleSubmit} name="userForm" ref={(el) => this.form = el} autoComplete="off">
        <fieldset>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="first_name" defaultValue={user.first_name} className="form-control" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="last_name" defaultValue={user.last_name} className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" defaultValue={user.email} className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" name="password" defaultValue={user.password} className="form-control" />
          </div>
          <div className="form-group">
            <label>Activation State</label>
            <select name="activation_state" defaultValue={user.activation_state} className="form-control">
              <option value="CO">CO</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {user.id ? "Update User" : "Create User"}
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default UserForm;
