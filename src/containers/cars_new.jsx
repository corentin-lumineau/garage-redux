import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createBike } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createBike(values, () => {
      this.props.history.push('/');
    });
  }

  required = (value) => {
    if (!value) {
      return 'Required';
    }
    return undefined;
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <div>
          <input {...field.input} placeholder={field.label} type={field.type} />
          {field.meta.touched && ((field.meta.error && <span>{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="brand"
            type="text"
            component={this.renderField}
            validate={this.required}
            label="Brand"
          />
          <Field
            name="model"
            type="text"
            component={this.renderField}
            validate={this.required}
            label="Model"
          />
          <Field
            name="owner"
            type="text"
            component={this.renderField}
            validate={this.required}
            label="Owner"
          />
          <Field
            name="plate"
            type="text"
            component={this.renderField}
            validate={this.required}
            label="Plate"
          />
          <br />
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

export default reduxForm({
  form: 'newCarForm',
})(
  connect(null, { createBike })(CarsNew)
);
