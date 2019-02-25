import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import RecipeDropdowns from '../components/recipes/RecipeDropdowns';
import RecipeSpotlightCheckboxList from '../components/recipes/recipeSpotlightCheckboxList';
import ShoppingListContainer from './ShoppingListContainer';
import { connect } from 'react-redux';
import { getMyMealdays } from '../actions/myMealdays';
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
      buttonText: "Edit"
    }
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          <button onClick={this.handleOnClick}>
            {this.state.buttonText} Meal Plan
          </button>
          <p> {this.state.enabled ? 'true' : 'false'} </p>
          <div className="mealplan">
          {this.state.enabled ?
            <RecipeDropdowns mealdays={this.props.groupedMealdays} recipes={this.props.recipes} />
          :
            <Mealdays mealdays={this.props.groupedMealdays} allMealdays={this.props.allMealdays} />
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
    this.state.enabled ? alert("I should fire a PATCH request") : console.log("dropdowns enabled")
  }

}

const mapStateToProps = (state) => {
  return {
    allMealdays: state.mealdays.allMealdays,
    groupedMealdays: state.mealdays.groupedMealdays,
    mealSelection: state.mealdays.mealSelection,
    recipes: state.recipes.recipes
  }
}

export default connect(mapStateToProps, { getMyMealdays, getMyRecipes })(MySavedMealPlansContainer)
