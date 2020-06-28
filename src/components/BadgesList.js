import React from 'react';
import './styles/BadgesList.css';
import twitterLogo from '../images/Twitter_Logo_Blue.svg';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [FilteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const Result = badges.filter((badge) => {
      const fullName = `${badge.firstName} ${badge.lastName}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredBadges(Result);
  }, [badges, query]);

  return { query, setQuery, FilteredBadges };
}

export default function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, FilteredBadges } = useSearchBadges(badges);

  if (FilteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {FilteredBadges.map((badge) => {
          return (
            <Link
              key={badge.id}
              to={`/badges/${badge.id}`}
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
    </React.Fragment>
  );
}
