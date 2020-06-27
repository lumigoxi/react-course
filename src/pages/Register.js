import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/Register.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import Loading from '../components/Loading';

class Register extends React.Component {
  state = {
    loading: false,
    error: null,
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
      await api.badges.create(this.state.form);
      this.setState({ loading: false, error: null });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

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
              <h1>New Attendant</h1>
              <BadgeForm
                myChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
