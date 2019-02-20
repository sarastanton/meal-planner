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
              <select>
                {arr.map(a =>
                  <option> {a} </option>
                )}
              </select>
              {arr.map(a =>
                <div>
                  <input type="checkbox" value={a} onChange={this.handleChange} />
                </div>
              )}
            </div>
          <ShoppingListItem />
        </div>
      </React.Fragment>
    )
  }

  handleChange = (event) => {
    console.log(`${event.target.value} - ${event.target.checked} `)
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
