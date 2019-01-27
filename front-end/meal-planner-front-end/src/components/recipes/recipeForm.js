import React, { Component } from 'react';
import IngredientForm from './ingredientForm';
import { connect } from 'react-redux';
import { createNewDBRecipe } from '../../actions/myRecipes'

let ingredientCounter = 1;
let ingredientFormArray = [1];

class RecipeForm extends Component {


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createNewDBRecipe(this.props.recipeFormData)
  }

  handleOnClick = event => {
    event.preventDefault();
    console.log("button clicked");
    ++ingredientCounter;
    ingredientFormArray.push(ingredientCounter);
    this.forceUpdate()
  }

  render() {
    // debugger
    return (
      <div className="card">
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label htmlFor="name"><strong>Recipe Name: </strong></label>
            <input type="text" name="name" value={this.props.recipeFormData.name} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label htmlFor="directions"><strong>Directions:</strong> </label>
            <textarea name="directions"/>
          </p>
          <br/>
          {ingredientFormArray.map(i => <IngredientForm count={i}/>)}
          <br />
          <button onClick={this.handleOnClick}>Add another ingredient:</button>
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    recipeFormData: state.recipes.recipeFormData
  }
}

export default connect(mapStateToProps, { createNewDBRecipe })(RecipeForm)


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
