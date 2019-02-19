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

  handleOnChange = (event) => {
    console.log(event.target)
  }


  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the MySavedMealPlans Container component.
        <Mealdays mealdays={this.props.mealdays} />
        <div className="shopping">
          <RecipeSpotlight recipeDirection={"above"} changeHandler={this.handleOnChange} listType={this.checkboxList} selection={this.props.mealSelection} />
          <ShoppingListContainer />
        </div>
        </div>
      </React.Fragment>
    )
  }

  checkboxList(ingredient) {
    return {__html: `<input type="checkbox" onChange=${(e) => this.handleOnChange(e)} id=${ingredient.id} /> ${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
  }



}

const mapStateToProps = (state) => {
  return {
    mealdays: state.mealdays.mealdays,
    mealSelection: state.mealdays.mealSelection
  }
}

export default connect(mapStateToProps, { getMyMealdays })(MySavedMealPlansContainer)
