import React, { Component } from 'react';
import ShoppingListItem from '../components/shoppingListItem';
import { connect } from 'react-redux';
import { addToShoppingList, removeFromShoppingList } from '../actions/shoppingList'

class ShoppingListContainer extends Component {


  render() {

    const shoppingList = this.props.shoppingList;

    return(
      <React.Fragment>
        <div className="container">
          This is the ShoppingListContainer Container component.
            <div>
              {shoppingList.map(ingredient =>
                <ShoppingListItem ingredient={ingredient} delete={this.removeFromDOMList}/>
              )}
            </div>
        </div>
      </React.Fragment>
    )
  }

  removeFromDOMList = ingredientId => {
    const selection = this.props.shoppingList.filter(ing => ing.id === ingredientId)[0]
    this.props.removeFromShoppingList(selection)
    console.log(selection)
  }

}

const mapStateToProps = state => {
  return {
    shoppingList: state.ingredients.shoppingList
  }
}

export default connect(mapStateToProps, { addToShoppingList, removeFromShoppingList })(ShoppingListContainer)
