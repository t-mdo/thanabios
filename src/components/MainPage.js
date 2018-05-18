import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CSummary from '../containers/CSummary';
import CUserInfos from '../containers/CUserInfos';

import Life from './Life';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const MainPage = ({ weeks }) => (
  <MainPageContainer>
    <CSummary />
    <Life
      weeks={weeks}
      lineLength={52}
    />
    <CUserInfos />
  </MainPageContainer>
);

MainPage.propTypes = {
  lifeExpectancy: PropTypes.number.isRequired,
  weeksPassed: PropTypes.number.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default MainPage;
