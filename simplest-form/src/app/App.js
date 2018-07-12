import React from 'react'
import ShowValues from './ShowValues'


class SimpleForm extends React.Component {
  state = {
    values: 'Fill in form and click Submit to see values'
  }


  render() {
    return (
      <div style={styles.wrapper}>

        <ShowValues values={this.state.values}/>
      </div>
    );
  }
};



const styles = {
  wrapper: {
    margin: '20px 0 0 30px'
  }
}