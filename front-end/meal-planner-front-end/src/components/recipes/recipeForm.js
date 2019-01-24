import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveRecipeFormData } from '../../actions/myRecipes'
import { createNewDBRecipe } from '../../actions/myRecipes'

class RecipeForm extends Component {

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createNewDBRecipe(this.props.recipeFormData)
  }

  handleOnChange = event => {
    debugger
    const { name, value } = event.target;
    const currentRecipeFormData = {...this.props.recipeFormData, [name]: value};
    this.props.receiveRecipeFormData(currentRecipeFormData)
    debugger
  }

  componentWillMount() {
    debugger
  }

  render() {
    // debugger
    // const { quantity, unit, description, directions } = this.props.recipeFormData;

    return (
      <div className="card">
      This is the RecipeForm Component.
      {/*
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <label htmlFor="quantity">Quantity (should be a number): </label>
          <input type="text" name="quantity" value={this.props.recipeFormData.quantity} onChange={this.handleOnChange}/>
        </p>
        <p>
          <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
          <input type="text" name="unit" value={this.props.recipeFormData.unit} onChange={this.handleOnChange}/>
        </p>
        <p>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" value={this.props.recipeFormData.description} onChange={this.handleOnChange}/>
        </p>
        <p>
          <label htmlFor="directions">Directions: </label>
          <textarea name="directions" value={this.props.recipeFormData.directions} onChange={this.handleOnChange}/>
        </p>
        <input type="submit" />
      </form>
      */}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    recipeFormData: state.recipeFormData
  }
}

export default connect(mapStateToProps, { createNewDBRecipe, receiveRecipeFormData })(RecipeForm)


// <form onSubmit={this.handleOnSubmit}>
//   <p>
//     <label htmlFor="quantity">Quantity (should be a number): </label>
//     <input type="text" name="quantity" value={quantity} onChange={this.handleOnChange}/>
//   </p>
//   <p>
//     <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
//     <input type="text" name="unit" value={unit} onChange={this.handleOnChange}/>
//   </p>
//   <p>
//     <label htmlFor="description">Description: </label>
//     <input type="text" name="description" value={description} onChange={this.handleOnChange}/>
//   </p>
//   <p>
//     <label htmlFor="directions">Directions: </label>
//     <textarea name="directions" value={directions} onChange={this.handleOnChange}/>
//   </p>
//   <input type="submit" />
// </form>
