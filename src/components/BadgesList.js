import React, { Component } from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/Twitter_Logo_Blue.svg';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </React.Fragment>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <Link
              key={badge.id}
              to={`/badges/${badge.id}/edit`}
              className="text-reset text-decoration-none"
            >
              <li className="BadgesListItem">
                <Gravatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                />
                <div>
                  <h5 className="BadgesListItem__info">
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <div className="BadgesListItem__socialMedia">
                    <img src={twitterLogo} alt="" />
                    <span>@{badge.twitter}</span>
                  </div>
                  <p className="BadgesListItem__JobTitle">{badge.jobTitle}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
}
