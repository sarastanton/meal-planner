import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveRecipeFormData } from '../../actions/myRecipes'
import { createNewDBRecipe } from '../../actions/myRecipes'

const initialState = {
  quantity: '',
  unit: '',
  description: '',
  directions: ''
}

class RecipeForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    this.props.createNewDBRecipe(this.props.rerecipeFormData)
  }

  handleChange = event => {
    const { name, value } = event.target;
    const currentRecipeFormData = {... this.props.recipeFormData, [name]: value};
    this.props.receiveRecipeFormData(currentRecipeFormData)
    debugger
  }

  render() {
    debugger
    const { quantity, unit, description, directions } = this.props.recipeFormData;

    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="quantity">Quantity (should be a number): </label>
            <input type="text" name="quantity" value={quantity} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
            <input type="text" name="unit" value={unit} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={description} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="directions">Directions: </label>
            <textarea name="directions" value={directions} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({
    recipeFormData: state.recipeFormData
  })
}

export default connect(mapStateToProps, { createNewDBRecipe, receiveRecipeFormData })(RecipeForm)
