export const FETCH_CARS = 'FETCH_CARS';
export const BIKE_CREATED = 'CARS_CREATED';

export function fetchCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/:coco-bike/cars')
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createBike(body, callback) {
  const request = fetch('https://wagon-garage-api.herokuapp.com/:coco-bike/cars', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: BIKE_CREATED,
    payload: request
  };
}
