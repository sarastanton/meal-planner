import React, { Component } from 'react';
import { connect } from 'react-redux'

class SignUpContainer extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <React.Fragment>
        <div>
          This is the SignUp Container component.
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
