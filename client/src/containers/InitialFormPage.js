import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import InitialForm from '../components/InitialForm';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InitialFormPage = () => (
  <WrapperContainer>
    <Wrapper height={60} width={60} >
      <Title>Birthdate</Title>
      <InitialForm />
    </Wrapper>
  </WrapperContainer>
);

export default InitialFormPage;
