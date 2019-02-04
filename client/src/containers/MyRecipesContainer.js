import React, { Component } from 'react';
import Recipe from '../components/recipes/recipe';
import RecipeSpotlight from '../components/recipes/recipeSpotlight';
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
            <RecipeSpotlight />
            <RecipeForm />
          </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  }
}

export default connect(mapStateToProps, { getMyRecipes })(MyRecipesContainer)
