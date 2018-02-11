import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerStock from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = styled(DatePickerStock)`
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #aeaeae;
  padding: 6px 10px 5px;
  text-align: center;

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);
  }
`;

const InitialForm = ({ className }) => (
  <div className={className}>
    <DatePicker
      dateFormat="YYYY/MM/DD"
    />
  </div>
);

InitialForm.defaultProps = {};

InitialForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(InitialForm)`
  margin: 0 auto;
`;
