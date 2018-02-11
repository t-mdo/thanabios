import { UPDATE_USER } from '../actions/user';

export const setupStatus = (state = false, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return true;
    default:
      return state;
  }
};

