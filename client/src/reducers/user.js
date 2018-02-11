import { combineReducers } from 'redux';
import moment from 'moment';

import { UPDATE_USER } from '../actions/user';

const birthdate = (state = moment(), action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.user.birthdate;
    default:
      return state;
  }
};

export const user = combineReducers({
  birthdate,
});
