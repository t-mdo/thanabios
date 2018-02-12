import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import _ from 'lodash';

import { SquareLoader } from 'halogenium';

import WeekLine from './WeekLine';

const Loader = styled(SquareLoader)`
  margin: 0 auto;
`;

const WeekGrid = ({ className, weeks, lineLength, lifeSettingUp }) => {
  const lines = _.chunk(weeks, lineLength).map(line => <WeekLine key={_.uniqueId('line:')} weeks={line} />);

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
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 10vh;
  width: 75%;
  height: 80%;
`;
