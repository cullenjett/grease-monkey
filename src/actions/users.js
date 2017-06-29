import api from '../api';

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
});

export const createUser = (user) => ({
  type: 'CREATE_USER',
  user
});

export const fetchUsers = () => (dispatch) => {
  return api.users.all().then(response => {
    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      response
    });
  });
};

export const fetchUser = (id) => (dispatch) => {
  return api.users.find(id).then(response => {
    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      response: [response]
    });
  });
}
