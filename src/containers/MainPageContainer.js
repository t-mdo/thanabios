import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';

import MainPage from '../components/MainPage';
import Loading from '../components/Loading';

const MainPageContainer = ({ lifeSettingUp, lifeExpectancy, weeksPassed }) => {
  const weeks = _.times(lifeExpectancy).map(i => ({ id: _.uniqueId('week:'), passed: (i <= weeksPassed) }));

  if (lifeSettingUp) {
    return (
      <Loading />
    );
  }
  return (
    <MainPage
      lifeExpectancy={lifeExpectancy}
      weeksPassed={weeksPassed}
      weeks={weeks}
    />
  );
};

MainPageContainer.propTypes = {
  lifeExpectancy: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
  lifeSettingUp: PropTypes.bool.isRequired,
  lifeRequestFailed: PropTypes.bool.isRequired,
  lifeRequestError: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  lifeExpectancy: state.life.lifeExpectancy,
  weeksPassed: state.life.weeksPassed,
  weeksAhead: state.life.weeksAhead,
  lifeSettingUp: state.life.settingUp,
  lifeRequestFailed: state.life.failed,
  lifeRequestError: state.life.failedError,
});

export default connect(mapStateToProps)(MainPageContainer);
