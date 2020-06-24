import React, { Component } from 'react';

export default class BadgeForm extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.myChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.myChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.myChange}
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>JobTitle</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.myChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.myChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}
