import PropTypes from 'prop-types';
import styled from 'styled-components';

const Square = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-style: solid;
  border-color: #282828;
  border-width: 2px;
  border-radius: 25%;
  background: ${props => props.filled ? '#9d9d9d' : 'transparent'};
`;

Square.defaultProps = {
  filled: false,
};

Square.propTypes = {
  size: PropTypes.number.isRequired,
  filled: PropTypes.bool.isRequired,
};

export default Square;
