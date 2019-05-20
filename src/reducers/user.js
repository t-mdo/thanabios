import { combineReducers } from 'redux';

import { USER_UPDATE } from '../actions/user';

const birthdate = (state = null, action) => {
  switch (action.type) {
    case USER_UPDATE: {
      return action.user.birthdate;
    }
    default:
      return state;
  }
};

const gender = (state = '', action) => {
  switch (action.type) {
    case USER_UPDATE:
      return action.user.gender;
    default:
      return state;
  }
};

const country = (state = '', action) => {
  switch (action.type) {
    case USER_UPDATE:
      return action.user.country;
    default:
      return state;
  }
};

export const user = combineReducers({
  birthdate,
  gender,
  country,
});
