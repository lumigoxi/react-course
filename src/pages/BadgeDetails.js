import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
export default function BadgeDetails(props) {
  return (
    <div>
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="" />
              </div>
              <div className="col-6">
                <h1>
                  {props.badge.firstName} {props.badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge attendantInfo={props.badge} />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${props.badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.toggleShow} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  toggleShow={props.toggleShow}
                  deleteBadge={props.deleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
