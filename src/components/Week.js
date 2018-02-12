import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Square from './Square';

const Week = ({ className, passed }) => (
  <div className={className}>
    <Square size={4} filled={passed} />
  </div>
);

Week.propTypes = {
  passed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Week)`
`;
