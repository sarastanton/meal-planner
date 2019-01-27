import React from 'react';

const IngredientForm = props => {
  return (
    <div>
      <strong>Ingredient {props.count}:</strong>
      <p>
        <label htmlFor="quantity">Quantity (should be a number): </label>
        <input type="text" name="quantity"/>
      </p>
      <p>
        <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
        <input type="text" name="unit"/>
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <input type="text" name="description"/>
      </p>
      <br />
    </div>
  )
}

export default IngredientForm
