import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { FormInput, FormSelect } from '../../components/interface/form-inputs'
import { updateProfile, addNotification } from '../../actions'

const countriesList = [
                        {value: 'BR', label: 'Brazil', phoneCode: 55},
                        {value: 'US', label: 'United States', phoneCode: 1},
                        {value: 'NO', label: 'Norway', phoneCode: 43},
                        {value: 'UK', label: 'United Kingdom', phoneCode: 44},
                        {value: 'IN', label: 'India', phoneCode: 33}
                      ]

class EditProfilePhone extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false, step: 'get_phone'}
  }

  onSubmit(values) {
    const modeQueryParam = this.props.mode ? `?mode=${this.props.mode}` : ''
    const url = `/api/profile${modeQueryParam}`

    this.setState({isLoading: true, step: 'sending_phone'})

    axios.patch(url, values).then(

        response => {

                this.setState({isLoading: false, step: 'get_code'})
                this.props.updateProfile(response.data)
              },
        response => {
          this.setState({isLoading: false, step: 'get_phone'})
          this.props.addNotification(response.message, 'is-danger')
        }
    )
  }

  renderGetPhoneForm()  {

    return (
            <div>
              <p>
                We will send you a code to validate your phone number.
              </p>

              <Field
                name="country_id"
                label="Country"
                type="text"
                options={countriesList}
                component={FormSelect}
              />

              <Field
                name="phone"
                label="Phone number"
                type="text"
                placeholder="Numbers only"
                component={FormInput}
              />

              <div className="field is-grouped">
                <div className="control">
                  <button className={`button is-link ${ this.state.isLoading ? 'is-loading' : null }` }>Save phone</button>
                </div>
              </div>
            </div>
          )
  }

  renderGetCodeForm() {
    return (
            <div>
              <p>Please validate your phone number</p>

              <Field
                name="code"
                label="Code"
                placeholder="Code received"
                type="text"
                component={FormInput}
              />

              <div className="field is-grouped">
                <div className="control">
                  <button className={`button is-link ${ this.state.isLoading ? 'is-loading' : null }` }>Validate code</button>
                </div>
              </div>
            </div>
          )
  }

  renderForms() {

    switch(this.state.step) {
      case 'get_phone':
        return this.renderGetPhoneForm()
      case 'get_code':
        return this.renderGetCodeForm()
      default:
        return this.renderGetPhoneForm()
    }
  }

  render()  {

    const { handleSubmit } = this.props

    return (

      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
          {this.renderForms()}
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.phone) {
    errors.phone = "Please insert your phone number"
  }

  if(!values.country_id) {
    errors.country_id = "Please select your country"
  }

  return errors
}

function mapStateToProps(state) {
  return {profile: state.profile, initialValues: state.profile}
}

export default reduxForm({ validate, form: 'EditProfilePhoneForm' })(
  connect(mapStateToProps, {updateProfile, addNotification})(EditProfilePhone)
)
