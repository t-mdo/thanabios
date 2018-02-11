import { combineReducers } from 'redux';

import { user } from './user';
import { life } from './life';

export default combineReducers({
  user,
  life,
});
