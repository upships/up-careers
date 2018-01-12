import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {loadProfile} from '../../actions'
import LoadingMessage from '../../components/interface/loader'

import OnboardingSteps from './Steps'

import EditProfilePersonal from '../../components/edit-profile/personal'
import EditProfilePhone from '../../components/edit-profile/phone'
import OnboardingCertificates from './Certificates'
import OnboardingEducation from './Education'
import OnboardingProfessional from './Professional'
import OnboardingSeafaring from './Seafaring'

class Onboarding extends Component {

  componentWillMount()  {
    this.props.loadProfile()
  }

  renderCurrentStep()  {

    const { registration_step } = this.props.profile

    switch(parseInt(registration_step, 10))  {

      case 0:
        return <EditProfilePhone mode="onboarding" />
      case 1:
        return <EditProfilePersonal mode="onboarding" />
      case 2:
        return <OnboardingEducation />
      case 3:
        return <OnboardingSeafaring />
      case 4:
        return <OnboardingCertificates />
      case 5:
        return <OnboardingProfessional />
      default:
        return <EditProfilePhone mode="onboarding" />
    }
  }

  render()  {

    const { profile } = this.props

    if(!Object.keys(profile).length > 0)  {
        return <LoadingMessage />
    }

    if(profile.complete || profile.registration_step === 10)  {
      return <Redirect to="/profile" />
    }

    return (
      <section className="section" >
        <div className="container" >

          <OnboardingSteps currentStep={profile.registration_step} />

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
