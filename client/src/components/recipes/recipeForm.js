import React, { Component } from 'react';
import IngredientForm from './ingredientForm';
import { connect } from 'react-redux';
import { createNewDBRecipe } from '../../actions/myRecipes'
import { receiveRecipeFormData } from '../../actions/myRecipes'
import { clearRecipeForm } from '../../actions/myRecipes'

class RecipeForm extends Component {

  constructor() {
    super()
    this.ingredientCounter = 1;
    this.ingredientFormArray = [1];
  }

  createIngredientsArray = () => {
    const ingredientsArray = [];

    for (let i = 0; i < this.ingredientFormArray.length; i++) {
      const element = `ingredient-${this.ingredientFormArray[i]}`;
      const newIng = {
        quantity: document.getElementsByClassName(`${element} quantity`).quantity.value,
        unit: document.getElementsByClassName(`${element} unit`).unit.value,
        description: document.getElementsByClassName(`${element} description`).description.value
      };
        ingredientsArray.push(newIng)
    }

    return ingredientsArray
  }

  handleOnClick = event => {
    event.preventDefault();
    ++this.ingredientCounter;
    this.ingredientFormArray.push(this.ingredientCounter);
    this.forceUpdate()

  }

  handleOnSubmit = event => {
    event.preventDefault();
    const formData = {
      name: this.props.name,
      directions: this.props.directions,
      ingredients_attributes: this.createIngredientsArray()
    };
    this.props.createNewDBRecipe(formData);
    this.props.clearRecipeForm();
    this.forceUpdate()
  };


  handleOnChange = event => {
    this.props.receiveRecipeFormData({
      name: document.getElementById("recipe-name").value,
      directions: document.getElementById("recipe-directions").value
    })
  }


  render() {
    debugger
    return (
      <div className="card card-holder">
        <form id="recipe-form" onSubmit={this.handleOnSubmit}>
          <p>
            <label htmlFor="name"><strong>Recipe Name: </strong></label>
            <input id="recipe-name" type="text" name="name" value={this.props.name} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label htmlFor="directions"><strong>Directions:</strong> </label>
            <textarea id="recipe-directions" name="directions" value={this.props.directions} onChange={this.handleOnChange}/>
          </p>
          <br/>
          {this.ingredientFormArray.map(i => <IngredientForm count={i} createRecipeObj={this.createRecipeObj}/>)}
          <br />
          <button onClick={this.handleOnClick}>Add another ingredient:</button>
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    name: state.recipes.recipeFormData.name,
    directions: state.recipes.recipeFormData.directions
  })
}


export default connect(mapStateToProps, { createNewDBRecipe, receiveRecipeFormData, clearRecipeForm })(RecipeForm)
