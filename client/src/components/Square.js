import PropTypes from 'prop-types';
import styled from 'styled-components';

const Square = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-style: solid;
  border-color: #989898;
  border-width: 1px;
  background: ${props => props.filled ? '#888888' : 'transparent'};
`;

Square.defaultProps = {
  filled: false,
};

Square.propTypes = {
  size: PropTypes.number.isRequired,
  filled: PropTypes.bool.isRequired,
};

export default Square;
