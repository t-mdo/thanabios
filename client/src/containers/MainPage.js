import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';

import Wrapper from '../components/Wrapper';
import WeekGrid from '../components/WeekGrid';
import Title from '../components/Title';

const MainPage = ({ lifeSettingUp, lifeExpectancy, weeksPassed }) => {
  const weeks = _.times(lifeExpectancy).map(i => ({ id: _.uniqueId('week:'), passed: (i <= weeksPassed) }));
  return (
    <Wrapper height={100} width={40}>
      <Title>Your Life</Title>
      <WeekGrid lifeSettingUp={lifeSettingUp} weeks={weeks} lineLength={52} />
    </Wrapper>
  );
};

MainPage.propTypes = {
  lifeExpectancy: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
  lifeSettingUp: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  lifeExpectancy: state.life.lifeExpectancy,
  weeksPassed: state.life.weeksPassed,
  weeksAhead: state.life.weeksAhead,
  lifeSettingUp: state.life.settingUp,
});

export default connect(mapStateToProps)(MainPage);
