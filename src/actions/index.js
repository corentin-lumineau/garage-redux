export const FETCH_CARS = 'FETCH_CARS';
export const BIKE_CREATED = 'CARS_CREATED';
export const FETCH_BIKE = 'FECTH_BIKE';
export const DELETE_BIKE = 'DELETE_BIKE';

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
    .then(() => callback());

  return {
    type: BIKE_CREATED,
    payload: request
  };
}

export function fetchBike(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_BIKE,
    payload: promise
  };
}

export function deleteBike(id, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  })
    .then(r => r.json())
    .then(() => callback());

  return {
    type: DELETE_BIKE,
    payload: request
  };
}
