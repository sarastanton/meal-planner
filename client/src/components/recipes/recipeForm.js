import React, { Component } from 'react';
import IngredientForm from './ingredientForm';
import { connect } from 'react-redux';
import { createNewDBRecipe } from '../../actions/myRecipes'

class RecipeForm extends Component {

  constructor() {
    super()
    this.ingredientCounter = 1;
    this.ingredientFormArray = [1];
    this.state = {
      name: '',
      directions: '',
      ingredients_attributes: []
    };
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
    this.setState({
      ingredients_attributes: [
        ...this.state.ingredients_attributes,
        ...this.createIngredientsArray()
      ]
    }, () => this.props.createNewDBRecipe(this.state));
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    // debugger
    return (
      <div className="card card-holder">
        <form id="recipe-form" onSubmit={this.handleOnSubmit}>
          <p>
            <label htmlFor="name"><strong>Recipe Name: </strong></label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          </p>
          <p>
            <label htmlFor="directions"><strong>Directions:</strong> </label>
            <textarea name="directions" onChange={this.handleOnChange}/>
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

export default connect(null, { createNewDBRecipe })(RecipeForm)
