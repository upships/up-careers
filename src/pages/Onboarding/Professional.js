import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditProfileWorks from '../../components/edit-profile/works'
import { updateProfile } from '../../actions'
import AdvanceButton from '../../components/onboarding/advance-button'

class OnboardingProfessional extends Component {

  constructor(props)  {
      super(props)
      this.state = {isLoading: false}
  }

  render()  {

    return (
      <div >
        <div className="content" >
          <EditProfileWorks mode="onboarding" />
        </div>

        <div className="content" >
          <div className="field is-grouped">
            <div className="control">
              <AdvanceButton />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {updateProfile})(OnboardingProfessional)
