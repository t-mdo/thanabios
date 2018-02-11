import { combineReducers } from 'redux';
import moment from 'moment';

import { USER_UPDATE } from '../actions/user';

const birthdate = (state = moment(), action) => {
  switch (action.type) {
    case USER_UPDATE:
      return action.user.birthdate;
    default:
      return state;
  }
};

export const user = combineReducers({
  birthdate,
});
