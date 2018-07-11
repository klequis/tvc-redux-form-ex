import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ShowValues from './ShowValues'


class SimpleForm extends React.Component {
  state = {
    values: 'Fill in form and click Submit to see values'
  }

  onSubmit = (values) => {
    console.log('onSubmit: values', values)
    this.setState({
      values: values
    })
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div style={styles.wrapper}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          
          <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
          
        </form>
        <ShowValues values={this.state.values}/>
      </div>
    );
  }
};

export default reduxForm({
  form: 'simple'
})(SimpleForm)

const styles = {
  wrapper: {
    margin: '20px 0 0 30px'
  }
}