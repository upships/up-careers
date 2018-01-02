import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {loadProfile} from '../../actions'
import LoadingMessage from '../../components/interface/loader'

import OnboardingSteps from './Steps'

import EditProfilePersonal from '../../components/edit-profile/personal'
import EditProfilePhone from '../../components/edit-profile/phone'
import EditProfileCertificates from '../../components/edit-profile/certificates'
import EditProfileEducation from '../../components/edit-profile/education'
import EditProfileProfessional from '../../components/edit-profile/professional'
import EditProfileSeafaring from '../../components/edit-profile/seafaring'

class Onboarding extends Component {

  componentWillMount()  {
    this.props.loadProfile()
  }

  renderCurrentStep()  {

    const { registration_step } = this.props.profile

    switch(registration_step)  {
      case 1:
        return <EditProfilePersonal />
      case 2:
        return <EditProfilePhone />
      case 3:
        return <EditProfileCertificates />
      case 4:
        return <EditProfileEducation />
      case 5:
        return <EditProfileProfessional />
      case 6:
        return <EditProfileSeafaring />

      default:
        return <EditProfilePersonal />
    }
  }

  render()  {

    const { profile } = this.props

    if(!profile)  {
      return <LoadingMessage />
    }

    if(profile.complete)  {
      return <Redirect to="/profile" />
    }

    return (
      <section className="section" >
        <div className="container" >

          <OnboardingSteps />

          {this.renderCurrentStep()}

        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {profile: state.profile}
}

export default connect(mapStateToProps, {loadProfile})(Onboarding)
