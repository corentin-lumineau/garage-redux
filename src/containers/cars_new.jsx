import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createBike } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="content">Content</label>
          <Field
            className="form-control"
            label="Content"
            name="content"
            component="textarea"
            rows="8"
          />
          <button
            className="btn btn-primary" 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Create Bike
          </button>
        </form>
        <Link to={"/"}>
          Back to garage
        </Link>
      </div>
    );
  }
}

const decoratedComponent = connect(null, { createBike })(CarsNew);

export default reduxForm({
  form: 'newBikeForm',
})(decoratedComponent);
