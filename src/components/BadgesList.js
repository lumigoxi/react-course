import React, { Component } from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/Twitter_Logo_Blue.svg';
export default class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <img
                src={badge.avatarUrl}
                alt="Avatar"
                className="BadgesListItem__avatar"
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
          );
        })}
      </ul>
    );
  }
}
