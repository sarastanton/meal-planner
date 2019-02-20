import React, { Component } from 'react';
import Recipe from '../components/recipes/recipe';
import RecipeSpotlightPlainList from '../components/recipes/recipeSpotlightPlainList';
import RecipeForm from '../components/recipes/recipeForm';
import { getMyRecipes } from '../actions/myRecipes'
import { connect } from 'react-redux'

class MyRecipesContainer extends Component {

  componentDidMount() {
    // debugger
    this.props.getMyRecipes()
  }

  render() {
    // debugger
    return(
      <React.Fragment>
        <div className="container my-recipes">
          <div className="card-holder">
            My Saved Recipes:
            {this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
          </div>
            <RecipeSpotlightPlainList allRecipes={this.props.recipes} selection={this.props.recipeSelection} recipeDirection={"at left"} listType={"plainList"} />
            <RecipeForm />
          </div>
      </React.Fragment>
    )
  }

  plainList(ingredient) {
    return {__html: `${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    mealdays: state.mealdays.mealdays,
    recipeSelection: state.recipes.recipeSelection

  }
}

export default connect(mapStateToProps, { getMyRecipes })(MyRecipesContainer)
