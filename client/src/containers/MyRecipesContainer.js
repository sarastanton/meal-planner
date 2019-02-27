import React, { Component } from 'react';
import Recipe from '../components/recipe';
import RecipeSpotlightPlainList from '../components/recipeSpotlightPlainList';
import RecipeForm from '../components/recipeForm';
import { getMyRecipes } from '../actions/myRecipes'
import { deleteRecipe } from '../actions/myRecipes'
import { sendRecipeSelection } from '../actions/myRecipes'
import { connect } from 'react-redux'

class MyRecipesContainer extends Component {

  componentDidMount() {
    this.props.getMyRecipes()
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          <div className="r-title">My Saved Recipes:</div>
          <div className="my-recipes">
            <div className="card-holder">
              {this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
            </div>
            <RecipeSpotlightPlainList allRecipes={this.props.recipes} selection={this.props.recipeSelection} recipeDirection={"at left"} listType={"plainList"}
            delete={(id) => this.deleteRecipe(id)} />
            <RecipeForm />
          </div>
        </div>
      </React.Fragment>
    )
  }

  plainList(ingredient) {
    return {__html: `${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
  }

  deleteRecipe(id) {
    this.props.deleteRecipe(id)
    this.props.sendRecipeSelection({})
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    mealdays: state.mealdays.mealdays,
    recipeSelection: state.recipes.recipeSelection

  }
}

export default connect(mapStateToProps, { getMyRecipes, deleteRecipe, sendRecipeSelection })(MyRecipesContainer)
