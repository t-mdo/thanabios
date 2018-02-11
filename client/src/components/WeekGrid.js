import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import _ from 'lodash';

import WeekLine from './WeekLine';

const WeekGrid = ({ className, weeks, lineLength }) => {
  const lines = _.chunk(weeks, lineLength).map(line => <WeekLine key={_.uniqueId('line:')} weeks={line} />);

  return (
    <div className={className}>
      {lines}
    </div>
  );
};

WeekGrid.defaultProps = {};

WeekGrid.propTypes = {
  className: PropTypes.string.isRequired,
  weeks: PropTypes.array.isRequired,
  lineLength: PropTypes.number.isRequired,
};

export default styled(WeekGrid)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 75%;
  height: 100%;
`;
