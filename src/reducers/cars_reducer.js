import { FETCH_CARS, BIKE_CREATED } from "../actions";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case BIKE_CREATED:
      return action.payload;
    default:
      return state;
  }
}
