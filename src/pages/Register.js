import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/Register.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class Register extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
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

  render() {
    return (
      <div>
        <Navbar />
        <main className="Register__hero">
          <img className="img-fluid" src={header} alt="register logo" />
        </main>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                attendantInfo={this.state.form}
                avatarUrl="https://s.gravatar.com/avatar/0b693cbf8378f5a5e0f5c534ddd47b65?s=80"
              />
            </div>

            <div className="col">
              <BadgeForm
                myChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
