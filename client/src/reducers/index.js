import { combineReducers } from 'redux';

import { user } from './user';
import { life } from './life';
import { setupStatus } from './setupStatus';

export default combineReducers({
  user,
  life,
  setupStatus,
});
