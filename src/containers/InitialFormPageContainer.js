import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import InitialFormPage from '../components/InitialFormPage';

import { setupUser as setupUserThunk } from '../actions/user';
import { setupLife as setupLifeThunk } from '../actions/life';

const InitialFormPageContainer = ({ user, setupUser, setupLife, history }) => {
  const handleChange = ({ name, value }) => setupUser({ ...user, [name]: value });

  const handleSubmit = () => {
    if (user.birthdate === null
      || user.gender === ''
      || user.country === '') {
      return;
    }
    setupLife(user);
    history.push('/life');
  };

  return (
    <InitialFormPage
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

InitialFormPageContainer.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
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
