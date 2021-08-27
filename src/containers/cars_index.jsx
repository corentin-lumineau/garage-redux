import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
        <div className="card-bike">
          <div className="details">
            <p><b>Brand :</b> {car.brand}</p>
            <p><b>Model :</b> {car.model}</p>
            <p><b>Owner :</b> {car.owner}</p>
          </div>
          <img src="https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg" alt="bike" />
        </div>
      </Link>
      );
    });
  }

  render() {
    if (this.props.cars.length === 0) {
      return (
        <div className="app">
          <Aside>
            <Link to="/cars/new">
              Add new bike
            </Link>
          </Aside>
          <div className="bikes-container">
            <h2>No bike registered yet...</h2>
          </div>
        </div>
      );
    }

    return (
      <div className="app">
        <Aside>
          <Link to="/cars/new">
            Add new bike
          </Link>
        </Aside>
        <div className="bikes-container">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
