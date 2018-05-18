import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Wrapper from './Wrapper';

const Title = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: normal;
  margin: 0 0 30px 0;
  text-align: center;
  font-size: 3em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Text = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  text-align: center;
  color: #989898;
  font-size: 2.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const ReverseText = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: normal;
  font-size: 2.5em;
  text-align: center;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #989898;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Summary = ({ weeksAhead, weeksPassed }) => (
  <Wrapper margin="0px 4% 0px 4%" width={20} height={50} animation={`${fadein} 13s`}>
    <Title>Summary</Title>
    <div>
      <Text>Lived Weeks</Text>
      <Text>{weeksPassed}</Text>
    </div>
    <div>
      <ReverseText>Weeks left to live</ReverseText>
      <ReverseText>{weeksAhead}</ReverseText>
    </div>
  </Wrapper>
);

Summary.defaultProps = {};

Summary.propTypes = {
  weeksAhead: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
};

export default Summary;
