import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerStock from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = styled(DatePickerStock)`
  font-size: 25px;
  border-radius: 4px;
  border: 1px solid ${({ denied }) => denied ? '#ff0000' : '#aeaeae'};
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

const BirthdatePicker = ({ value, onChange, denied }) => {
  const onDateChange = date => onChange({ name: 'birthdate', value: date });

  if (value === null) {
    return (
      <DatePickerContainer>
        <DatePicker
          dateFormat="YYYY/MM/DD"
          onChange={onDateChange}
          placeholderText="Birthdate: YYYY/MM/DD"
          denied={denied}
        />
      </DatePickerContainer>
    );
  }

  return (
    <DatePickerContainer>
      <DatePicker
        dateFormat="YYYY/MM/DD"
        selected={value}
        onChange={onDateChange}
        denied={denied}
      />
    </DatePickerContainer>
  );
};

BirthdatePicker.defaultProps = {
  value: null,
  denied: false,
};

BirthdatePicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  denied: PropTypes.bool,
};

export default BirthdatePicker;
