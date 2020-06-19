import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/Register.css';
import Badge from '../components/Badge';

class Register extends React.Component {
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
                firstName="Miguel"
                lastName="Xiap"
                jobTitle="Systems Engineer and Computer Science"
                twitter="lumigoxi"
                avatarUrl="https://s.gravatar.com/avatar/0b693cbf8378f5a5e0f5c534ddd47b65?s=80"
              />
              ,
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
