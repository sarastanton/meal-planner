import React from 'react'

const ShoppingListItem = props =>
  <div className="card">
    {props.ingredient.quantity} {props.ingredient.unit} {props.ingredient.description}
  </div>



export default ShoppingListItem
