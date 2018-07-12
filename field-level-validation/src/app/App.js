import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ShowValues from './ShowValues'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const required = value => value ? undefined : 'Required'
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined

class FieldLevelValidation extends React.Component {
  state = {
    values: null
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
        <form onSubmit={handleSubmit}>
          <Field name="age" type="number"
            component={renderField} label="Age"
            validate={[ required, number, minValue18 ]}
            warn={tooOld}
          />
          <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>               
        <ShowValues values={this.state.values}/>
      </div>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(FieldLevelValidation)

const styles = {
  wrapper: {
    margin: '20px 0 0 30px'
  }
}