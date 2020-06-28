import React, { Component } from 'react';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import './styles/Badges.css';
import { Link } from 'react-router-dom';
import api from '../api';
import Loading from '../components/Loading';
import PageError from '../components/PageError';
export default class Bages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null,
    };
    this.getData = null;
  }

  async fetchData() {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();
      const results = [
        {
          firstName: 'Miguel',
          lastName: 'Xiap (My badge only read)',
          email: 'lumigoxi@gmail.com',
          jobTitle: 'Software Engineer',
          twitter: 'lumigoxi',
          id: 'lumigoxi',
        },
        ...data,
      ];
      this.setState({
        loading: false,
        data: results,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  componentDidMount() {
    this.fetchData();
    this.getData = setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.getData);
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <Loading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges-conf-logo" src={confLogo} alt="Conf logo" />
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
