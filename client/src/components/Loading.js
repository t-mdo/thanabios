import React from 'react';
import styled from 'styled-components';

import { ScaleLoader } from 'halogenium';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 2em;
`;

const Loading = () => (
  <Wrapper>
    <ScaleLoader color="#989898" />
    <Text>Loading your life</Text>
  </Wrapper>
);

Loading.defaultProps = {};

Loading.propTypes = {
};

export default Loading;
