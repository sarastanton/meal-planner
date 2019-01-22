import React, { Component } from 'react';
import Recipe from '../components/recipes/recipe';
import RecipeForm from '../components/recipes/recipeForm';
import { getMyRecipes } from '../actions/myRecipes'
import { connect } from 'react-redux'

class MyRecipesContainer extends Component {

  componentDidMount() {
    this.props.getMyRecipes()
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          My Saved Recipes:
          {this.props.recipes}
        <Recipe />
        <RecipeForm />
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.myRecipes
  }
}

export default connect(mapStateToProps, { getMyRecipes })(MyRecipesContainer)
