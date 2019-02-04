import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import { connect } from 'react-redux'

class MealdaysContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the Mealdays Container component.
        <Mealdays />
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MealdaysContainer)
