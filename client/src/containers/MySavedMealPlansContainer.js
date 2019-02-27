import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import RecipeDropdowns from '../components/stateless/RecipeDropdowns';
import RecipeSpotlightCheckboxList from '../components/recipeSpotlightCheckboxList';
import ShoppingListContainer from './ShoppingListContainer';
import { connect } from 'react-redux';
import { getMyMealdays } from '../actions/myMealdays';
import { editMealday } from '../actions/myMealdays';
import { getMyRecipes } from '../actions/myRecipes'


class MySavedMealPlansContainer extends Component {

  componentDidMount() {
    this.props.getMyMealdays();
    this.props.getMyRecipes()
  }

  constructor() {
    super()
    this.state = {
      enabled: false,
      buttonText: "Edit",
    }
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          <button className="mp-btn" onClick={this.handleOnClick}>
            {this.state.buttonText} Meal Plan
          </button>
          <div className="mealplan">
          {this.state.enabled ?
            <RecipeDropdowns mealdays={this.props.groupedMealdays}
            allMealdays={this.props.allMealdays} recipes={this.props.recipes} updateMealPlan={this.updateMealPlan} />
          :
            <Mealdays allMealdays={this.props.allMealdays} mealdays={this.props.groupedMealdays}/>
          }
            <div className="shopping">
              <div className="recipe">
                <RecipeSpotlightCheckboxList recipeDirection={"above"} listType={"checkboxList"} selection={this.props.mealSelection.recipe} />
              </div>
              <div className="shop-list">
                <ShoppingListContainer />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({
      enabled: !this.state.enabled,
      buttonText: this.state.buttonText === "Edit" ? 'Save' : "Edit"
    });
  }

  updateMealPlan = (updateData) => {
    this.props.editMealday(updateData);
  }

}

const mapStateToProps = (state) => {
  return {
    allMealdays: state.mealdays.allMealdays,
    groupedMealdays: state.mealdays.groupedMealdays,
    mealSelection: state.mealdays.mealSelection,
    recipes: state.recipes.recipes,
  }
}

export default connect(mapStateToProps, { getMyMealdays, getMyRecipes, editMealday })(MySavedMealPlansContainer)
