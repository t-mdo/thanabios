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

const Life = ({ weeks }) => (
  <Wrapper margin="0 auto" height={100} width={40}>
    <AnimatedTitle>Your Life</AnimatedTitle>
    <WeekGrid
      weeks={weeks}
      lineLength={52}
    />
  </Wrapper>
);

Life.defaultProps = {};

Life.propTypes = {
  weeks: PropTypes.array.isRequired,
};

export default Life;
