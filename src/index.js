import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import getStore from './store';

import App from './containers/App';

const initialStateDev = {
  user: {
    birthdate: moment('1985-11-05T00:00:00.000Z'),
    gender: 'male',
    country: 'France',
  },
  life: {
    settingUp: false,
    requesting: false,
    failed: false,
    failedError: {},
    lifeExpectancy: 4459.857142857143,
    weeksPassed: 1684,
    weeksAhead: 2775,
  },
};

const store = getStore(initialStateDev);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
