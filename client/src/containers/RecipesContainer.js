import React, { Component } from 'react';
import DirectionsList from '../components/recipes/directionsList';
import { connect } from 'react-redux';
// import { getRecipes } from '../actions/recipes';

class RecipesContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // this.props.getRecipes()
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          Recipe:
        <DirectionsList />
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}


export default connect(mapStateToProps)(RecipesContainer)
