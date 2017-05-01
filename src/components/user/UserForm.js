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
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
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
