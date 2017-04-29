import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const formData = new FormData(this.form);
    const userDetails = {};

    for (let pair of formData.entries()) {
      userDetails[pair[0]] = pair[1];
    }

    onSubmit(userDetails);
    this.form.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="userForm" ref={(el) => this.form = el} autoComplete="off">
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
    )
  }
}

export default UserForm;
