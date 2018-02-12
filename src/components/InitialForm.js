import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerStock from 'react-datepicker';
import { AwesomeButton } from 'react-awesome-button';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-awesome-button/dist/styles.css';

import CountrySelect from './CountrySelect';
import GenderSelect from './GenderSelect';

const DatePicker = styled(DatePickerStock)`
  font-size: 25px;
  border-radius: 4px;
  border: 1px solid #aeaeae;
  padding: 12px 20px 10px;
  text-align: center;

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);
  }
`;

const DatePickerContainer = styled.div`
  margin: 0 auto;
`;

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
    <DatePickerContainer>
      <DatePicker
        dateFormat="YYYY/MM/DD"
        selected={user.birthdate}
        onChange={handleDateChange}
      />
    </DatePickerContainer>
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
