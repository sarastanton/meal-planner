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
        <div>
          This is the MyRecipes Container component.
        </div>
        <Recipe />
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
