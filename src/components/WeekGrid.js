import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import _ from 'lodash';

import { SquareLoader } from 'halogenium';

import WeekLine from './WeekLine';

const comeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1000px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedWeekLine = styled(WeekLine)`
  opacity: 0;
  animation: ${comeInUp} 3s;
  animation-delay: ${props => props.i * 0.1}s;
  animation-fill-mode: forwards;
`;

const Loader = styled(SquareLoader)`
  margin: 0 auto;
`;

const WeekGrid = ({ className, weeks, lineLength, lifeSettingUp }) => {
  const lines = _.chunk(weeks, lineLength).map((line, i) => <AnimatedWeekLine i={i} key={_.uniqueId('line:')} weeks={line} />);

  if (lifeSettingUp) {
    return (
      <div className={className}>
        <Loader color="#989898" loading={lifeSettingUp} />
      </div>
    );
  }

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
  lifeSettingUp: PropTypes.bool.isRequired,
  lifeRequestFailed: PropTypes.bool.isRequired,
  lifeRequestError: PropTypes.object.isRequired,
};

export default styled(WeekGrid)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 70%;
  height: 80%;
`;
