import React from 'react';

const IngredientForm = props => {
  return (
    <div>
      <h3>Ingredient {props.count}:</h3>
      <p>
        <label htmlFor="quantity">Quantity (should be a number): </label>
        <input className={`ingredient ingredient-${props.count} quantity`} type="text" name="quantity"/>
      </p>
      <p>
        <label htmlFor="unit">Unit (i.e. teaspoon, cup, dash...): </label>
        <input className={`ingredient ingredient-${props.count} unit`} type="text" name="unit"/>
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <input className={`ingredient ingredient-${props.count} description`} type="text" name="description"/>
      </p>
      <br />
    </div>
  )
}

export default IngredientForm
