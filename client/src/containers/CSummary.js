import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Summary from '../components/Summary';

const CSummary = ({ weeksAhead, weeksPassed }) => (
  <Summary weeksPassed={weeksPassed} weeksAhead={weeksAhead} />
);

CSummary.propTypes = {
  weeksAhead: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  weeksAhead: state.life.weeksAhead,
  weeksPassed: state.life.weeksPassed,
});

export default connect(mapStateToProps)(CSummary);
