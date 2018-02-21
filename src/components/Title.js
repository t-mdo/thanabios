import styled, { keyframes } from 'styled-components';

const comeInDown = keyframes`
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Title = styled.h2`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: normal;
  font-size: 5em;
  text-align: center;
  margin: 0 0;
  animation: ${comeInDown} 4s 
`;

export default Title;
