import React, { Component } from 'react'
import ProfilePersonal from '../../components/edit-profile/personal'
import LoadingMessage from '../../components/interface/loader'

class OnboardingPersonal extends Component {

  render()  {

    const { profile } = this.props

    return (
            <section className="section" >
              <div className="container" >
                <ProfilePersonal mode="onboarding" profile={profile} />
              </div>
            </section>

          )
  }
}

export default OnboardingPersonal
