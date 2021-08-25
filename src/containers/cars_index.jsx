import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <div>
          <p>{car.brand}</p>
          <p>{car.model}</p>
          <p>{car.owner}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>
          COCO BIKE GARAGE
        </h2>
        {this.renderCars()}
        <Link to={`/cars/new`}>
          Add new bike
        </Link>
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
