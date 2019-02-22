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
            <div>
              {this.props.shoppingList.map(ingredient =>
                <ShoppingListItem ingredient={ingredient}/>
              )}
            </div>
        </div>
      </React.Fragment>
    )
  }


  // const totalItems = (items, key) => items.reduce(
  //   (result, item) => ({
  //     ...result,
  //     [item[key]]: [
  //       ...(result[item[key]] || []),
  //       item,
  //     ],
  //   }),
  //   {},
  // );
  // }


}

const mapStateToProps = state => {
  return {
    shoppingList: state.ingredients.shoppingList
  }
}

export default connect(mapStateToProps, { addToShoppingList })(ShoppingListContainer)
