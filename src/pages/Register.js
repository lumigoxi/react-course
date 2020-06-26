import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/Register.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class Register extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      this.setState({ loading: false, error: null });
      await api.badges.create(this.state.form);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <main className="Register__hero">
          <img
            className="Register__hero-img img-fluid"
            src={header}
            alt="register logo"
          />
        </main>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge attendantInfo={this.state.form} />
            </div>
            <div className="col">
              <BadgeForm
                myChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
