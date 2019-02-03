import { combineReducers } from 'redux';

import { LIFE_SETTING_UP, LIFE_EXPECTANCY_FETCH_REQUEST, LIFE_EXPECTANCY_FETCH_FAILURE, LIFE_EXPECTANCY_FETCH_SUCCESS } from '../actions/life';

const settingUp = (state = false, action) => {
  switch (action.type) {
    case LIFE_SETTING_UP:
      return action.bool;
    default:
      return state;
  }
};

const requesting = (state = false, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_REQUEST:
      return true;
    case LIFE_EXPECTANCY_FETCH_FAILURE:
      return false;
    case LIFE_EXPECTANCY_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failed = (state = false, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_REQUEST:
      return false;
    case LIFE_EXPECTANCY_FETCH_FAILURE:
      return true;
    case LIFE_EXPECTANCY_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failedError = (state = {}, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_REQUEST:
      return {};
    case LIFE_EXPECTANCY_FETCH_FAILURE:
      return action.err;
    default:
      return state;
  }
};

const lifeExpectancy = (state = 0, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_SUCCESS:
      return action.lifeExpectancy.asWeeks();
    default:
      return state;
  }
};

const weeksPassed = (state = 0, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_SUCCESS:
      return action.now.diff(action.birthdate, 'week');
    default:
      return state;
  }
};

const weeksAhead = (state = 0, action) => {
  switch (action.type) {
    case LIFE_EXPECTANCY_FETCH_SUCCESS:
      return action.birthdate.clone().add(action.lifeExpectancy, 'week').diff(action.now, 'week') - 1;
    default:
      return state;
  }
};

export const life = combineReducers({
  settingUp,
  requesting,
  failed,
  failedError,
  lifeExpectancy,
  weeksPassed,
  weeksAhead,
});
