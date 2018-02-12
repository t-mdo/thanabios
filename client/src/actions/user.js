export const USER_UPDATE = 'USER_UPDATE';

export const userUpdate = user => ({
  type: USER_UPDATE,
  user,
});

export const setupUser = user => (dispatch) => {
  dispatch(userUpdate(user));
};
