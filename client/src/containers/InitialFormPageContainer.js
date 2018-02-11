import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import InitialFormPage from '../components/InitialFormPage';

import { setupUser as setupUserThunk } from '../actions/user';

const InitialFormPageContainer = ({ user, setupUser, history }) => {
  const handleFormChange = (form) => {
    setupUser({ birthdate: form });
    history.push('/life');
  };

  return <InitialFormPage user={user} handleFormChange={handleFormChange} />;
};

InitialFormPageContainer.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  setupUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setupUser: user => dispatch(setupUserThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InitialFormPageContainer));
