import React, { Component } from 'react';
import IngredientForm from './stateless/ingredientForm';
import { connect } from 'react-redux';
import { createNewDBRecipe } from '../actions/myRecipes'
import { receiveRecipeFormData } from '../actions/myRecipes'

class RecipeForm extends Component {

  constructor() {
    super()
    this.ingredientCounter = 1;
    this.ingredientFormArray = [1];
  }

  createIngredientsArray = () => {
    let ingredientsArray = [];

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

  clearIngredientsArray = () => {
    let list = document.getElementsByClassName("ingredient");
    for (let item of list) {
      item.value = "";
    }
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
      name: this.props.recipeFormData.name,
      directions: this.props.recipeFormData.directions,
      ingredients_attributes: this.createIngredientsArray()
    };
    this.props.createNewDBRecipe(formData);
    this.clearIngredientsArray();
    this.forceUpdate()
  };


  handleOnChange = event => {
    this.props.receiveRecipeFormData({
      name: document.getElementById("recipe-name").value,
      directions: document.getElementById("recipe-directions").value
    })
  }


  render() {
    return (
      <div className="card r-card">
        <form id="recipe-form" onSubmit={this.handleOnSubmit}>
            <br/>
            <label htmlFor="name"><h3>Recipe Name: </h3></label>
            <input id="recipe-name" type="text" name="name" value={this.props.recipeFormData.name} onChange={this.handleOnChange}/>
            <label htmlFor="directions"><h3>Directions:</h3> </label>
            <textarea id="recipe-directions" name="directions" value={this.props.recipeFormData.directions} onChange={this.handleOnChange}/>
            {this.ingredientFormArray.map(i => <IngredientForm count={i} createRecipeObj={this.createRecipeObj}/>)}
          <button onClick={this.handleOnClick}>Add another ingredient:</button>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    recipeFormData: state.recipes.recipeFormData
  })
}


export default connect(mapStateToProps, { createNewDBRecipe, receiveRecipeFormData })(RecipeForm)
