import React, { Component } from 'react'
import { connect } from 'react-redux'
import { advanceOnboarding } from '../../actions'

class AdvanceButton extends Component {

  render()  {
    return (
      <button className="button is-link is-medium" onClick={this.props.advanceOnboarding} >Advance to next step</button>
    )
  }
}

export default connect(null, {advanceOnboarding})(AdvanceButton)
