import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import { connect } from 'react-redux'


class MySavedMealPlansContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the MySavedMealPlans Container component.
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

export default connect(mapStateToProps, mapDispatchToProps)(MySavedMealPlansContainer)
