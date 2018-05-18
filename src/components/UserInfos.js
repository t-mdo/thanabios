import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Title from './Title';

import fadein from './KFFadein';

const Text = styled.p`
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
  font-size: 2.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextValue = styled.p`
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  font-style: italic;
  text-align: center;
  font-size: 2.1em;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserInfos = ({ birthString, countryString }) => (
  <Wrapper margin="0px 4% 0px 4%" width={20} height={50} animation={`${fadein} 13s`}>
    <Title>Your Information</Title>
    <div>
      <Text>Born on</Text>
      <TextValue>{birthString}</TextValue>
    </div>
    <div>
      <Text>Lives in</Text>
      <TextValue>{countryString}</TextValue>
    </div>
  </Wrapper>
);

UserInfos.defaultProps = {};

UserInfos.propTypes = {
  birthString: PropTypes.string.isRequired,
  countryString: PropTypes.string.isRequired,
};

export default UserInfos;
