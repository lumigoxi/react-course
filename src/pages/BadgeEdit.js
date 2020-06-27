import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import Loading from '../components/Loading';

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false, error: null });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  async componentDidMount() {
    this.FetchData();
  }

  async FetchData() {
    this.setState({ loading: true, error: null });
    try {
      const BadgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(BadgeId);
      this.setState({ loading: false, error: null });
      this.setState({ form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <main className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-img img-fluid"
            src={header}
            alt="BadgeEdit logo"
          />
        </main>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge attendantInfo={this.state.form} />
            </div>
            <div className="col">
              <h1>Edit Attendant</h1>
              <BadgeForm
                myChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
