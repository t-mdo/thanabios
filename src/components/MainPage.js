import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Life from './Life';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MainPage = ({ lifeSettingUp, lifeRequestFailed, lifeRequestError, weeks }) => (
  <MainPageContainer>
    <Life
      lifeSettingUp={lifeSettingUp}
      lifeRequestFailed={lifeRequestFailed}
      lifeRequestError={lifeRequestError}
      weeks={weeks}
      lineLength={52}
    />
  </MainPageContainer>
);

MainPage.propTypes = {
  lifeExpectancy: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
  lifeSettingUp: PropTypes.bool.isRequired,
  lifeRequestFailed: PropTypes.bool.isRequired,
  lifeRequestError: PropTypes.object.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default MainPage;
