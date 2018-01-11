import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditProfileCertificates from '../../components/edit-profile/certificates'
import { updateProfile } from '../../actions'

class OnboardingCertificates extends Component {

  constructor(props)  {
      super(props)
      this.state = {isLoading: false}
  }

  render()  {

    return (
      <div >
        <div className="content" >
          <EditProfileCertificates mode="onboarding" />
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

export default connect(null, {updateProfile})(OnboardingCertificates)
