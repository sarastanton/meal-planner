import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import RecipeSpotlightCheckboxList from '../components/recipes/recipeSpotlightCheckboxList';
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
        <Mealdays mealdays={this.props.groupedMealdays} allMealdays={this.props.allMealdays} />
        <div className="shopping">
          <RecipeSpotlightCheckboxList recipeDirection={"above"} listType={"checkboxList"} selection={this.props.mealSelection.recipe} />
          <ShoppingListContainer />
        </div>
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allMealdays: state.mealdays.allMealdays,
    groupedMealdays: state.mealdays.groupedMealdays,
    mealSelection: state.mealdays.mealSelection,
  }
}

export default connect(mapStateToProps, { getMyMealdays })(MySavedMealPlansContainer)
