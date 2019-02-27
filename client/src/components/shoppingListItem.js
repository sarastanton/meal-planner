import React from 'react';

export const ShoppingListItem = (props) => {

  return(
      <div className="card" data-id={props.ingredient.id}>
        {props.ingredient.quantity} {props.ingredient.unit} {props.ingredient.description}
        <a href=""><i className="material-icons" onClick={(e) => handleOnClick(e, props)}>clear</i></a>
      </div>
    )

  }
  const handleOnClick = (event, props) => {
    event.preventDefault()
    let id = event.target.parentElement.parentElement.dataset.id;
    props.delete(parseInt(id));
    document.getElementsByName(id)[0].checked = false
  }
