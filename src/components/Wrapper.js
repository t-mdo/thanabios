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
  children: PropTypes.node.isRequired,
};

export default styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: ${props => props.height}%;
  width: ${props => props.width}%;
  margin: ${props => props.margin};
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  overflow: hidden;
  ${props => props.animation ? `animation: ${props.animation};` : ''}
`;
