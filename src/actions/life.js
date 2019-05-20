import axios from 'axios';
import moment from 'moment';

const API_URL = 'https://d6wn6bmjj722w.cloudfront.net/1.0/';

export const LIFE_SETTING_UP = 'LIFE_SETTING_UP';
export const LIFE_EXPECTANCY_FETCH_REQUEST = 'LIFE_EXPECTANCY_FETCH_REQUEST';
export const LIFE_EXPECTANCY_FETCH_FAILURE = 'LIFE_EXPECTANCY_FETCH_FAILURE';
export const LIFE_EXPECTANCY_FETCH_SUCCESS = 'LIFE_EXPECTANCY_FETCH_SUCCESS';

export const lifeSettingUp = bool => ({
  type: LIFE_SETTING_UP,
  bool,
});

export const lifeExpectancyFetchRequest = () => ({
  type: LIFE_EXPECTANCY_FETCH_REQUEST,
});

export const lifeExpectancyFetchFailure = err => ({
  type: LIFE_EXPECTANCY_FETCH_FAILURE,
  err,
});

export const lifeExpectancyFetchSuccess = (birthdate, lifeExpectancy) => ({
  type: LIFE_EXPECTANCY_FETCH_SUCCESS,
  birthdate,
  lifeExpectancy,
  now: moment(),
});

export const setupLife = user => (dispatch) => {
  dispatch(lifeSettingUp(true));
  dispatch(lifeExpectancyFetchRequest());
  axios.get(`${API_URL}/life-expectancy/total/${user.gender}/${user.country}/${user.birthdate.format('YYYY-MM-DD')}`)
    .then((res) => {
      dispatch(lifeExpectancyFetchSuccess(user.birthdate, moment.duration(res.data.total_life_expectancy, 'years')));
      dispatch(lifeSettingUp(false));
    })
    .catch((err) => {
      dispatch(lifeExpectancyFetchFailure(err));
      dispatch(lifeSettingUp(false));
    });
};
