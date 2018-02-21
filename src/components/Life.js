import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Wrapper from '../components/Wrapper';
import WeekGrid from '../components/WeekGrid';
import Title from '../components/Title';

const comeInDown = keyframes`
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedTitle = styled(Title)`
  animation: ${comeInDown};
`;

const Life = ({ lifeSettingUp, lifeRequestFailed, lifeRequestError, weeks }) => (
  <Wrapper margin="0 auto" height={100} width={40}>
    <AnimatedTitle>Your Life</AnimatedTitle>
    <WeekGrid
      lifeSettingUp={lifeSettingUp}
      lifeRequestFailed={lifeRequestFailed}
      lifeRequestError={lifeRequestError}
      weeks={weeks}
      lineLength={52}
    />
  </Wrapper>
);

Life.defaultProps = {};

Life.propTypes = {
  lifeSettingUp: PropTypes.bool.isRequired,
  lifeRequestFailed: PropTypes.bool.isRequired,
  lifeRequestError: PropTypes.object.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default Life;
