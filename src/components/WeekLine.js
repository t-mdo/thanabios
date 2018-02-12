import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Week from './Week';

const WeekLine = ({ className, weeks }) => {
  const line = weeks.map(week => <Week key={week.id} passed={week.passed} />);

  return (
    <div className={className}>
      {line}
    </div>
  );
};

WeekLine.defaultProps = {};

WeekLine.propTypes = {
  className: PropTypes.string.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default styled(WeekLine)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4px;
  margin-bottom: 4px;
`;
