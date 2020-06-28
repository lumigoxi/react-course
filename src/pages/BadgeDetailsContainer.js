import React, { Component } from 'react';
import api from '../api';
import Loading from '../components/Loading';
import Error from '../components/PageError';
import BadgeDetails from './BadgeDetails';

export default class BadgeDetailsContainer extends Component {
  state = {
    modalIsOpen: false,
    loading: false,
    error: null,
    data: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  async componentDidMount() {
    this.FetchData();
  }

  async FetchData() {
    this.setState({ loading: true, error: null });
    try {
      const BadgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(BadgeId);
      this.setState({ loading: false, error: null });
      this.setState({ data: data });
      if (this.isEmpty(this.state.data)) {
        this.props.history.push('/badges');
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  handelToggleShow = (e) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
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

    if (this.state.error) {
      return <Error />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        toggleShow={this.handelToggleShow}
        modalIsOpen={this.state.modalIsOpen}
        deleteBadge={this.handleDeleteBadge}
      />
    );
  }
}
