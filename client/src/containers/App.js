import React, { Component } from 'react';

import _ from 'lodash';

import Wrapper from '../components/Wrapper';
import WeekGrid from '../components/WeekGrid';

const weeks = [
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: true },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
  { id: _.uniqueId('week:'), passed: false },
];

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          'background-color': '#eeeeee',
          height: '100%',
          width: '100%',
        }}
        className="App"
      >
        <Wrapper>
          <WeekGrid weeks={weeks} lineLength={26} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
