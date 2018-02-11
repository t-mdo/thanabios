import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

Wrapper.defaultProps = {};

Wrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40%;
  min-width: 300px;
  min-height: 240px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
`;
