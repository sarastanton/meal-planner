import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeSpotlight extends Component {

  render() {
    // debugger
    if (Object.entries(this.props.recipeSelection).length !== 0) {
      return (
        <div className="card" key={this.props.recipeSelection.id}>
          <React.Fragment>
            <h3>{this.props.recipeSelection.name}</h3>
            <p><strong> Directions: </strong></p> {this.props.recipeSelection.directions}
            <br />
            <p><strong> Ingredients: </strong></p>
            <table>
              <tbody>
                <td>
                    {this.props.recipeSelection.ingredients.map(ingredient =>
                      <tr>
                        <h4>
                          {ingredient.quantity} {ingredient.unit} {ingredient.description}
                        </h4>
                      </tr>)}
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
          Select a recipe at left to see its details:
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    recipeSelection: state.recipes.recipeSelection,
  }
}

export default connect(mapStateToProps)(RecipeSpotlight)
