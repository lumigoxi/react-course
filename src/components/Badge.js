import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="" alt="Avatar" />
          <h1>
            Miguel <br />
            Xiap
          </h1>
        </div>

        <div>
          <h3>Student of platzi</h3>
          <p>@lumigoxi</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
