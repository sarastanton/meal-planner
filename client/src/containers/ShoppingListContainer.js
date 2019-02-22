import React, { Component } from 'react';
import ShoppingListItem from '../components/shoppingListItem';
import { connect } from 'react-redux';
import { addToShoppingList } from '../actions/shoppingList'

class ShoppingListContainer extends Component {


  render() {

    const shoppingList = this.props.shoppingList;
  //   const descKeys = [shoppingList.map(item => item.description)];
  //   const unitKeys = [shoppingList.map(item => item.unit)];
  //   const groupedShoppingList = [];
  //   const reducer = (item, desc) => item.desc === desc
  //
  // const testGroup = shoppingList.forEach(item => {
  //     return (shoppingList.reduce(i => i.description ===  item.description)
  //     )
  //   })

    // console.log(testGroup)

    return(
      <React.Fragment>
        <div className="container">
          This is the ShoppingListContainer Container component.
            <div>
              {shoppingList.map(ingredient =>
                <ShoppingListItem ingredient={ingredient}/>
              )}
            </div>
        </div>
      </React.Fragment>
    )
  }

  groupByDesc = () => {

  }

  //  group by description and then by unit

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
