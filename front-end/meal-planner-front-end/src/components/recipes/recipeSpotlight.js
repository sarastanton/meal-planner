import React from 'react';
import { connect } from 'react-redux';


const RecipeSpotlight = props => {
  console.log(props)
  debugger
  if (props.recipeSelection != undefined) {
    return (
      <div className="card">
        <React.Fragment>
          <h2>{props.recipeSelection.name}</h2>
        </React.Fragment>
      </div>
    )
  } else {
    return (
      <div className="card">
        "Select a recipe at left to see its details:"
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipeSelection: state.recipeSelection,
  }
}

export default connect(mapStateToProps)(RecipeSpotlight)
