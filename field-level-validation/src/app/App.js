import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ShowValues from './ShowValues'



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