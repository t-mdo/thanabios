import { USER_UPDATE } from '../actions/user';

export const setupStatus = (state = false, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return true;
    default:
      return state;
  }
};

