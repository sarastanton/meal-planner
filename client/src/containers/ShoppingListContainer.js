import React, { Component } from 'react';
import ShoppingListItem from '../components/shoppingListItem';
import { connect } from 'react-redux';
import { addToShoppingList, removeFromShoppingList } from '../actions/shoppingList'
import { printerFriendlyShoppingList } from '../components/printShoppingList'

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
            <div>
              <button onClick={this.handleOnClick}>
                Printer-Friendly Version
              </button>
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

  handleOnClick = (event) => {
    event.preventDefault()
    alert("You clicked on me!")
    // <Redirect to={{
    //         pathname: '/order',
    //         state: { id: '123' }
    //     }}
    // />
    //
    // this.props.location.state.id
  }

}

const mapStateToProps = state => {
  return {
    shoppingList: state.ingredients.shoppingList
  }
}

export default connect(mapStateToProps, { addToShoppingList, removeFromShoppingList })(ShoppingListContainer)
