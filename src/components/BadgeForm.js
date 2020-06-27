import React, { Component } from 'react';

export default class BadgeForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
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
          <button className="btn btn-primary">Save</button>
          {this.props.error && (
            <p className="text-danger"> {this.props.error.message} </p>
          )}
        </form>
      </React.Fragment>
    );
  }
}
