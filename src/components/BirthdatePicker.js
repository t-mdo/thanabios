import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerStock from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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

const BirthdatePicker = ({ value, onChange }) => {
  if (value === null) {
    return (
      <DatePickerContainer>
        <DatePicker
          dateFormat="YYYY/MM/DD"
          onChange={onChange}
          placeholderText="Birthdate: YYYY/MM/DD"
        />
      </DatePickerContainer>
    );
  }

  return (
    <DatePickerContainer>
      <DatePicker
        dateFormat="YYYY/MM/DD"
        selected={value}
        onChange={onChange}
      />
    </DatePickerContainer>
  );
};

BirthdatePicker.defaultProps = {
  value: null,
};

BirthdatePicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default BirthdatePicker;
