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
        <div>
          This is the Mealdays Container component.
        </div>
        <Mealdays />
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
