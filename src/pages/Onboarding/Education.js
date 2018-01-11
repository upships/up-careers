import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditProfileEducation from '../../components/edit-profile/education'
import { updateProfile } from '../../actions'

class OnboardingEducation extends Component {

  constructor(props)  {
      super(props)
      this.state = {isLoading: false}
  }

  render()  {

    return (
      <div >
        <div className="content" >
          <EditProfileEducation mode="onboarding" />
        </div>

        <div className="content" >
          <div className="field is-grouped">
            <div className="control">
              <button className={`button is-link is-medium ${ this.state.isLoading ? 'is-loading' : null }` } onClick={() => this.props.updateProfile(null, () => {this.setState({isLoading: false})}, 'onboarding')} >Save information</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {updateProfile})(OnboardingEducation)
