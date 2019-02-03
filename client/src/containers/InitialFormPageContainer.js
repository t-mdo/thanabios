import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import InitialFormPage from '../components/InitialFormPage';

import { setupUser as setupUserThunk } from '../actions/user';
import { setupLife as setupLifeThunk } from '../actions/life';

// = ({ user, setupUser, setupLife, history }) => {

class InitialFormPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      birthdateError: false,
      genderError: false,
      countryError: false,
    };
  }
  render() {
    const handleChange = ({ name, value }) => this.props.setupUser({ ...this.props.user, [name]: value });

    const handleSubmit = async () => {
      await this.setState({
        ...this.state,
        birthdateError: (this.props.user.birthdate === null),
        genderError: (this.props.user.gender === ''),
        countryError: (this.props.user.country === ''),
      });
      if (!this.state.birthdateError && !this.state.genderError && !this.state.countryError) {
        this.props.setupLife(this.props.user);
        this.props.history.push('/life');
      }
    };

    return (
      <InitialFormPage
        user={this.props.user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={this.state}
      />
    );
  }
}

InitialFormPageContainer.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object, gender: PropTypes.string, country: PropTypes.string }).isRequired,
  setupUser: PropTypes.func.isRequired,
  setupLife: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setupUser: user => dispatch(setupUserThunk(user)),
  setupLife: user => dispatch(setupLifeThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InitialFormPageContainer));
