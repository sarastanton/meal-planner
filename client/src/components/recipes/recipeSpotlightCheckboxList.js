import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShoppingList, removeFromShoppingList } from '../../actions/shoppingList'

class RecipeSpotlightCheckboxList extends Component {

  render() {
    if (!!this.props.selection && Object.entries(this.props.selection).length !== 0) {
      return (
        <div className="card" key={this.props.selection.id}>
          <React.Fragment>
            <h3>{this.props.selection.name}</h3>
            <p><strong> Directions: </strong></p> {this.props.selection.directions}
            <br />
            <p><strong> Ingredients: </strong></p>
            <table className="ing-list">
              <tbody>
                <td>
                   {this.props.selection.ingredients.map(ingredient =>
                     <tr>
                       <h4>
                          <label>
                            {ingredient.quantity} {ingredient.unit} {ingredient.description}
                            <input type="checkbox" name={ingredient.id} onChange={(e) => this.handleChange(ingredient, e)} />
                          </label>
                       </h4>
                     </tr>
                   )}
               </td>
              </tbody>
            </table>
            <br />
          </React.Fragment>
        </div>
      )
    } else {
      return (
        <div className="card">
          Select a recipe above to see its details:
        </div>
      )
    }
  }

  handleChange = (ingredient, event) => {
    console.log(ingredient)
    !!event.target.checked ? this.props.addToShoppingList(ingredient) : this.props.removeFromShoppingList(ingredient)
  }

}

const mapStateToProps = (state) => {
  return {
    shoppingList: state.ingredients.shoppingList,
  }
}

export default connect(mapStateToProps, { addToShoppingList, removeFromShoppingList })(RecipeSpotlightCheckboxList)
