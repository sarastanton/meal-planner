import React, { Component } from 'react';
import createNewRecipe from '../../actions/recipesForm'

const initialState = {
  quantity: '',
  unit: '',
  description: '',
  directions: ''
}

export default class RecipesForm extends Component {

  constructor() {
    super()
    this.state = initialState
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.createNewRecipe(this.state)
    this.setState(initialState)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="quantity">Quantity (should be a number): </label>
            <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
            <input type="text" name="unit" value={this.state.unit} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="directions">Directions: </label>
            <textarea name="directions" value={this.state.directions} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }

}
