import React, { Component } from 'react';

export default class ShoppingListItem extends Component {

  render() {
    return(
      <div className="card" data-id={this.props.ingredient.id}>
        {this.props.ingredient.quantity} {this.props.ingredient.unit} {this.props.ingredient.description}
        <a href=""><i className="material-icons" onClick={this.handleOnClick}>clear</i></a>
      </div>
    )
  }

  handleOnClick = (event) => {
    event.preventDefault()
    let id = event.target.parentElement.parentElement.dataset.id;
    this.props.delete(parseInt(id));
    document.getElementsByName(id)[0].checked = false

  }

  // handleChange = (ingredient, event) => {
  //   !!event.target.checked ? this.props.addToShoppingList(ingredient) : this.props.removeFromShoppingList(ingredient)
  // }

}


// <i className="material-icons">add</i>
// <i className="material-icons">check</i>
// <i className="material-icons">done</i>
// <i className="material-icons">delete</i>
// <i className="material-icons">delete_forever</i>
