import { FETCH_CARS, BIKE_CREATED, FETCH_BIKE, DELETE_BIKE } from "../actions";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case BIKE_CREATED:
      return action.payload;
    case FETCH_BIKE:
      return [action.payload];
    case DELETE_BIKE:
      return action.payload;
    default:
      return state;
  }
}
