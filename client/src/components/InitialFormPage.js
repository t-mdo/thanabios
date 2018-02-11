import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Title from './Title';
import InitialForm from './InitialForm';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InitialFormPage = ({ user, handleFormChange }) => (
  <WrapperContainer>
    <Wrapper height={60} width={60} >
      <Title>Birthdate</Title>
      <InitialForm user={user} handleFormChange={handleFormChange} />
    </Wrapper>
  </WrapperContainer>
);

InitialFormPage.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default InitialFormPage;
