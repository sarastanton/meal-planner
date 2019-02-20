import React, { Component } from 'react';
import Mealdays from '../components/mealdays';
import RecipeSpotlightCheckboxList from '../components/recipes/recipeSpotlightCheckboxList';
import ShoppingListContainer from './ShoppingListContainer'
import { connect } from 'react-redux';
import { getMyMealdays } from '../actions/myMealdays'
import { addToShoppingList } from '../actions/shoppingList'
import { removeFromShoppingList } from '../actions/shoppingList'


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

  // checkboxList(ingredient) {
  //   return {__html: `<div><label> ${ingredient.quantity} ${ingredient.unit} ${ingredient.description} <input type="checkbox" name=${ingredient.id} onChange=${(e) => this.handleOnChange(ingredient)} /></label> </div>`}
  // }

  handleOnChange = (ingredient, event) => {
    // !!event.target.checked ? addToShoppingList(ingredient) : removeFromShoppingList(ingredient)
    // console.log(this)
    alert("Click")
  }


    // return {__html: `<input type="checkbox" onChange=${this.handleOnChange} id=${ingredient.id} /> ${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}

}

const mapStateToProps = (state) => {
  return {
    allMealdays: state.mealdays.allMealdays,
    groupedMealdays: state.mealdays.groupedMealdays,
    mealSelection: state.mealdays.mealSelection,
    shoppingList: state.ingredients.shoppingList
  }
}

export default connect(mapStateToProps, { getMyMealdays, addToShoppingList, removeFromShoppingList })(MySavedMealPlansContainer)
