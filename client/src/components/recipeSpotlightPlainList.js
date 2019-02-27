import React, { Component } from 'react';

class RecipeSpotlightPlainList extends Component {

  render() {
    if (!!this.props.selection && Object.entries(this.props.selection).length !== 0) {
      return (
        <div className="card" key={this.props.selection.id}>
        <a href=""><i className="material-icons" id="delete" onClick={this.handleOnClickDelete}>delete_forever</i></a>
        <a href=""><i className="material-icons" id="edit" onClick={this.handleOnClick}>edit</i></a>
        <br />
          <React.Fragment>
            <p className="title">{this.props.selection.name}</p>
            <p><strong> Directions: </strong></p> {this.props.selection.directions}
            <br />
            <p><strong> Ingredients: </strong></p>
            <table className="ing-list">
              <tbody>
                <td>
                   {this.props.selection.ingredients.map(ingredient =>
                     <tr>
                       <h4>
                          {ingredient.quantity} {ingredient.unit} {ingredient.description}
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
          <p>Select a recipe at left to see its details:</p>
        </div>
      )
    }
  }

  handleOnClickDelete = (event) => {
    event.preventDefault()
    this.props.delete(this.props.selection.id)
  }

  handleOnClickEdit = (event) => {
    event.preventDefault()
    this.props.edit(this.props.selection.id)
  }

}

export default RecipeSpotlightPlainList