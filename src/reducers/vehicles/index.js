import database from '../../database';

const initialState = {
  byId: database.vehicles.reduce((acc, vehicle) => {
    acc[vehicle.id] = vehicle;
    return acc;
  }, {}),
  allIds: database.vehicles.map(vehicle => vehicle.id)
}

const vehicles = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default vehicles;

export const getAllVehicles = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const getVehicle = (state, id) => {
  return state.byId[id] || {};
};

export const getVehiclesForUser = (state, userId) => {
  const allVehicles = state.allIds.map(id => state.byId[id]);
  return allVehicles.filter(vehicle => vehicle.relatedUser === +userId) || [];
};
