import React, { Component } from 'react';
import ShoppingListItem from '../components/shoppingListItem';
import { connect } from 'react-redux';
import { addToShoppingList } from '../actions/shoppingList'

class ShoppingListContainer extends Component {


  render() {
    const arr = ["a", "b", "c"]
    return(
      <React.Fragment>
        <div className="container">
          This is the ShoppingListContainer Container component.
          <select>
            {arr.map(a =>

            <option> {a} </option>
          )}
          </select>
          <ShoppingListItem />
        </div>
      </React.Fragment>
    )
  }

  totalItems = () => {

  }


}

const mapStateToProps = state => {
  return {
    shoppingList: state.ingredients.shoppingList
  }
}

export default connect(mapStateToProps, { addToShoppingList })(ShoppingListContainer)
