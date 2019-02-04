import React, { Component } from 'react';
import ShoppingListItem from '../components/shoppingListItem';
import { connect } from 'react-redux'

class ShoppingListContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div className="container">
          This is the ShoppingListContainer Container component.
          <ShoppingListItem />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer)
