import React, { Component } from 'react';
import Recipe from '../components/recipes/recipe'
import { connect } from 'react-redux'

class MyRecipesContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the MyRecipes Container component.
        <Recipe />
        </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipesContainer)
