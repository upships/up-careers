import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditProfileEducation from '../../components/edit-profile/education'
import { updateProfile } from '../../actions'

class OnboardingEducation extends Component {

  constructor(props)  {
      super(props)
  }

  render()  {

    return (
      <div >
        <EditProfileEducation mode="onboarding" />

        <div className="field is-grouped">
          <div className="control">
            <button className={`button is-link is-medium ${ this.state.isLoading ? 'is-loading' : null }` } onClick={() => this.props.updateProfile(null, () => {this.setState({isLoading: false})}, this.props.mode)} >Save information</button>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(null, {updateProfile})(OnboardingEducation)
