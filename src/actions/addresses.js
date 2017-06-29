import api from '../api';

export const updateAddress = (address) => ({
  type: 'UPDATE_ADDRESS',
  address
});

export const createAddress = (address) => ({
  type: 'CREATE_ADDRESS',
  address
});

export const fetchAddresses = () => (dispatch) => {
  return api.addresses.all().then(response => {
    dispatch({
      type: 'FETCH_ADDRESSES_SUCCESS',
      response
    });
  });
}
