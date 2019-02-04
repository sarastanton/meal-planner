import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendRecipeSelection } from '../../actions/myRecipes'

class Recipe extends Component {

  handleOnClick = (props) => (event) => {
    // debugger
    const targetId = parseInt(event.target.dataset.id)
    const recipeSelection = props.recipes.recipes.filter(recipe => recipe.id === targetId)[0]
    // debugger
    props.sendRecipeSelection(recipeSelection)
  }

  render() {
    return(
      <div key={this.props.recipe.id} data-id={this.props.recipe.id} className="card" onClick={this.handleOnClick(this.props)}>
        <h3 data-id={this.props.recipe.id} onClick={this.handleOnClick(this.props)}>{this.props.recipe.name}</h3>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}


export default connect(mapStateToProps, { sendRecipeSelection })(Recipe)
