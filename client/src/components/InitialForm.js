import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerStock from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = styled(DatePickerStock)`
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid #aeaeae;
  padding: 12px 20px 10px;
  text-align: center;

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);
  }
`;

const InitialForm = ({ className, user, handleFormChange }) => (
  <div className={className}>
    <DatePicker
      dateFormat="YYYY/MM/DD"
      selected={user.birthdate}
      onChange={handleFormChange}
    />
  </div>
);

InitialForm.defaultProps = {};

InitialForm.propTypes = {
  className: PropTypes.string.isRequired,
  user: PropTypes.shape({ birthdate: PropTypes.object }).isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default styled(InitialForm)`
  margin: 0 auto;
`;
