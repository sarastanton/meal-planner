import React, { Component } from 'react';

export default class ShoppingListItem extends Component {

  render() {
    return(
      <div className="card">
        {this.props.ingredient.quantity} {this.props.ingredient.unit} {this.props.ingredient.description}
        <a href=""><i className="material-icons" onClick={this.handleOnClick}>clear</i></a>
      </div>
    )
  }

  handleOnClick = (event) => {
    event.preventDefault()
    alert(`Oof ${event.target}`)
  }

}


// <i className="material-icons">add</i>
// <i className="material-icons">check</i>
// <i className="material-icons">done</i>
// <i className="material-icons">delete</i>
// <i className="material-icons">delete_forever</i>
