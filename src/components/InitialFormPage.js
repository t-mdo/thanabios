import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockWrapper from './Wrapper';
import Title from './MainTitle';
import InitialForm from './InitialForm';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled(StockWrapper)`
  min-width: 600px;
`;

const InitialFormPage = ({ user, handleChange, handleSubmit }) => (
  <WrapperContainer>
    <Wrapper margin="0 auto" height={60} width={60} >
      <Title>You</Title>
      <InitialForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  </WrapperContainer>
);

InitialFormPage.propTypes = {
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InitialFormPage;
