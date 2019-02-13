import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import { connect } from 'react-redux';
import { getMyMealdays } from '../actions/myMealdays'


class MySavedMealPlansContainer extends Component {

  componentDidMount() {
    this.props.getMyMealdays();
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the MySavedMealPlans Container component.
        <Mealdays mealdays={this.props.mealdays} />
        </div>
      </React.Fragment>
    )
  }

  // createDaysArray = () => {
  //   let array = [];
  //   Object.keys(this.props.mealdays).forEach(day => array.push(day));
  //   array.forEach(day => this.loadDaysAndMeals(day))
  // }
  //
  // loadDaysAndMeals = (day) => {
  //   const week = [];
  //   week.push(Object.assign({
  //     day: [
  //       {breakfast: this.props.mealdays.mealdays.filter(m => m.week_day === day)[0].recipe.name },
  //       {lunch: this.props.mealdays.mealdays.filter(m => m.week_day === day)[1].recipe.name},
  //       {dinner: this.props.mealdays.mealdays.filter(m => m.week_day === day)[2].recipe.name}
  //     ]
  //   }));
  //   debugger
  //   return week
  // }


}

const mapStateToProps = (state) => {
  return {
    // monday: state.mealdays.monday,
    // tuesday: state.mealdays.tuesday,
    // wednesday: state.mealdays.wednesday,
    // thursday: state.mealdays.thursday,
    // friday: state.mealdays.friday,
    // saturday: state.mealdays.saturday,
    // sunday: state.mealdays.sunday,
    mealdays: state.mealdays.mealdays
  }
}

export default connect(mapStateToProps, { getMyMealdays })(MySavedMealPlansContainer)
