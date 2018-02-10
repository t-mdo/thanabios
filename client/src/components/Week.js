import React from 'react';
import PropTypes from 'prop-types';

import Square from './Square';

const Week = ({ passed }) => (
  <Square size={5} filled={passed} />
);

Week.propTypes = {
  passed: PropTypes.bool.isRequired,
};

export default Week;
