import React, { Component } from 'react';

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
                            <input type="checkbox" name={ingredient.id} onChange={this.handleChange} />
                          </label>
                       </h4>
                     </tr>
                   )}
               </td>
              </tbody>
            </table>
            <br />
            ADD EDIT/DELETE BUTTONS
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

  handleChange = (event) => {
    // !!event.target.checked ? addToShoppingList(ingredient) : removeFromShoppingList(ingredient)
    console.log(event.target)
  }

}

export default RecipeSpotlightCheckboxList
