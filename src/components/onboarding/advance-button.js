import React, { Component } from 'react'
import { connect } from 'react-redux'
import { advanceOnboarding } from '../../actions'

class AdvanceButton extends Component {

  render()  {

    const mode = this.props.mode ? this.props.mode : 'onboarding'

    return (
      <button className="button is-link is-medium" onClick={() => this.props.advanceOnboarding(mode)} >
        { this.props.text ? this.props.text : 'Advance to next step'}
      </button>
    )
  }
}

export default connect(null, {advanceOnboarding})(AdvanceButton)
