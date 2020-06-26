import React from 'react';
import Gravatar from './Gravatar';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.attendantInfo.email || 'example@gmail.com'}
          />
          <h1>
            {this.props.attendantInfo.firstName || 'First Name'} <br />
            {this.props.attendantInfo.lastName || 'Last Name'}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.attendantInfo.jobTitle || 'Job Title'}</h3>
          <div>@{this.props.attendantInfo.twitter || 'Twitter'}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
