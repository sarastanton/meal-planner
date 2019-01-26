import React, { Component } from 'react';
import Recipe from '../components/recipes/recipe';
import RecipeSpotlight from '../components/recipes/recipeSpotlight';
import RecipeForm from '../components/recipes/recipeForm';
import { getMyRecipes } from '../actions/myRecipes'
import { connect } from 'react-redux'

class MyRecipesContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    console.log("MyRecipesContainer line 12")
    // debugger
    this.props.getMyRecipes()

  }

  render() {
    console.log(this.props)
    console.log("MyRecipesContainer line 19")
    // debugger
    return(
      <React.Fragment>
        <div className="container">
          My Saved Recipes:
          {console.log(this.props.recipes)}
          {this.props.recipes.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) }
          <RecipeSpotlight />
          <RecipeForm />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    recipe: state.newRecipe
  }
}

export default connect(mapStateToProps, { getMyRecipes })(MyRecipesContainer)
