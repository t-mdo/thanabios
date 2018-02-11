import { combineReducers } from 'redux';

import { user } from './user';
import { setupStatus } from './setupStatus';

export default combineReducers({
  user,
  setupStatus,
});
