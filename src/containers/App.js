import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPageContainer from './MainPageContainer';
import InitialFormPageContainer from './InitialFormPageContainer';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#eeeeee',
          height: '100%',
          width: '100%',
        }}
        className="App"
      >
        <Router>
          <Switch>
            <Route exact path="/" component={InitialFormPageContainer} />
            <Route exact path="/life" component={MainPageContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
