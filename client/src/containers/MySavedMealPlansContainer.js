import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import RecipeSpotlight from '../components/recipes/recipeSpotlight';
import ShoppingListContainer from './ShoppingListContainer'
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
        <div className="shopping">
          <RecipeSpotlight recipeDirection={"above"} listType={this.checkboxList} />
          <ShoppingListContainer />
        </div>
        </div>
      </React.Fragment>
    )
  }

  checkboxList(ingredient) {
    return {__html: '<input type="checkbox" id=' + `${ingredient.id}` + "/>" + `${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
  }


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
