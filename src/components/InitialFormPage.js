import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Title from './MainTitle';
import InitialForm from './InitialForm';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InitialFormPage = ({ user, handleCountryChange, handleGenderChange, handleDateChange, handleSubmit }) => (
  <WrapperContainer>
    <Wrapper margin="0 auto" height={60} width={60} >
      <Title>You</Title>
      <InitialForm
        user={user}
        handleGenderChange={handleGenderChange}
        handleCountryChange={handleCountryChange}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  </WrapperContainer>
);

InitialFormPage.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleGenderChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InitialFormPage;
