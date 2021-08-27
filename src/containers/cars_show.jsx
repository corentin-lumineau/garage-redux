import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchBike, deleteBike } from '../actions';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchBike(this.props.match.params.id);
    }
  }

  handleClick= (id) => {
    this.props.deleteBike(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.car.owner}</h3>
          <p>{this.props.car.model}</p>
        </div>
        <Link to="/">
          Back
        </Link>
        <button id={this.props.car.id} onClick={() => this.handleClick(this.props.car.id)}>Delete Bike</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBike, deleteBike }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
