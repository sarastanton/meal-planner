import React, { Component } from 'react'
import IngredientsList from './ingredientsList'
import DirectionsList from './directionsList'

export default class Recipe extends Component {

  handleOnClick = event => {
    console.log(event.target.dataset.id)
  }

  render() {
    return(
      <div key={this.props.recipe.id} data-id={this.props.recipe.id} className="card" onClick={this.handleOnClick}>
        <h3 data-id={this.props.recipe.id}>{this.props.recipe.name}</h3>
      </div>
    )
  }


}


// handleOnClick = event => {
//   <React.Fragment>
//     <IngredientsList id={event.target.key} />
//     <DirectionsList id={event.target.key} />
//   </React.Fragment>
// }
