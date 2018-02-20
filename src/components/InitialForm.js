import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AwesomeButton } from 'react-awesome-button';

import 'react-awesome-button/dist/styles.css';

import CountrySelect from './CountrySelect';
import GenderSelect from './GenderSelect';
import BirthdatePicker from './BirthdatePicker';

const Button = styled(AwesomeButton)`
  font-family: sans-serif !important;
  z-index: 0 !important;
  background-color: #989898 !important;
  margin: 0 auto !important;
`;

const InitialForm = ({ className, user, handleGenderChange, handleCountryChange, handleDateChange, handleSubmit }) => (
  <div className={className}>
    <GenderSelect value={user.gender} onChange={handleGenderChange} />
    <CountrySelect value={user.country} onChange={handleCountryChange} />
    <BirthdatePicker value={user.birthdate} onChange={handleDateChange} />
    <Button action={handleSubmit} type="secondary" size="large">Check It Out</Button>
  </div>
);

InitialForm.defaultProps = {};

InitialForm.propTypes = {
  className: PropTypes.string.isRequired,
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleGenderChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default styled(InitialForm)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
`;
