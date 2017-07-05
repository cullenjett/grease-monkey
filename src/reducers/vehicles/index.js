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

export const selectAllVehicles = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const selectVehicle = (state, id) => {
  return state.byId[id] || {};
};

export const selectVehiclesForUser = (state, userId) => {
  const allVehicles = state.allIds.map(id => state.byId[id]);
  return allVehicles.filter(vehicle => vehicle.relatedUser === +userId) || [];
};
