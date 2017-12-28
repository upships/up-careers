import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { RenderInput, RenderToggler } from '../../components/interface/form'

import { updateProfile } from '../../actions'

class OnboardingPersonal extends Component {

  constructor(props)  {
    super(props)

    this.state = {isLoading: false}

  }

  onSubmit(values) {

    this.setState({isLoading: true})

    axios.post('/api/profile/update', values).then(

        () => { this.props.updateProfile(values) }
    )
  }

  render()  {

    const { profile } = this.props
    const { handleSubmit } = this.props

    return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >


              <Field
                name="name"
                label="Name"
                type="text"
                placeholder="First and last name"
                value={profile.name}
                component={RenderInput}
              />

              <Field
                name="gender"
                label="Gender"
                type="text"
                placeholder="Gender"
                value={profile.gender}
                component={RenderInput}
              />

              <Field
                name="birthday"
                label="Birthday"
                type="text"
                placeholder="Birthday"
                value={profile.birthday}
                component={RenderInput}
              />

              <Field
                name="marital_status"
                label="Marital Status"
                type="text"
                placeholder="Marital status"
                value={profile.marital_status}
                component={RenderInput}
              />

              <Field
                name="country"
                label="Country"
                type="text"
                placeholder="Country"
                value={profile.country}
                component={RenderInput}
              />
              <Field
                name="state"
                label="State"
                type="text"
                placeholder="State"
                value={profile.state}
                component={RenderInput}
              />
              <Field
                name="city"
                label="City"
                type="text"
                placeholder="City"
                value={profile.city}
                component={RenderInput}
              />

              <Field
                name="address"
                label="Address"
                type="text"
                placeholder="Address"
                value={profile.address}
                component={RenderInput}
              />

              <div className="field is-grouped">
                <div className="control">
                  <button className={`button is-link is-medium ${ this.state.isLoading ? 'is-loading' : null }` }>Save & Advance</button>
                </div>
              </div>

            </form>
          )
  }
}

function validate(values) {
  const errors = {}

  if(!values.email) {
    errors.email = "Please inform an e-mail address"
  }

  if(!values.password) {
    errors.password = "Please inform a password"
  }

  if(!values.password_confirmation) {
    errors.password = "Please confirm your password"
  }

  if(values.password !== values.password_confirmation) {
    errors.password = "The password confirmation does not match"
  }

  if(!values.name) {
    errors.password = "Please write down your name"
  }

  return errors
}

function mapStateToProps(state) {
  return {profile: state.profile}
}

export default reduxForm({ validate, form: 'OnboardingProfileForm' })(

  connect(mapStateToProps, { updateProfile })(OnboardingPersonal)

)
