import React, { Component } from 'react';
import IngredientsList from '../components/recipes/ingredientsList';
import DirectionsList from '../components/recipes/directionsList';
import Recipe from '../components/recipes/recipe';
import { connect } from 'react-redux'

class RecipesContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the Recipes Container component.
        <IngredientsList />
        <DirectionsList />
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
