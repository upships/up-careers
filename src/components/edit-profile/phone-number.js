import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { FormInput, FormSelect } from '../../components/interface/form-inputs'
import { addNotification } from '../../actions'

const countriesList = [
                        {value: 1, label: 'Brazil', phoneCode: 55},
                        {value: 2, label: 'United States', phoneCode: 1},
                        {value: 3, label: 'Norway', phoneCode: 43},
                        {value: 4, label: 'United Kingdom', phoneCode: 44},
                        {value: 5, label: 'India', phoneCode: 33}
                      ]

class EditProfilePhoneNumber extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {

    const url = '/api/profile/phone'

    this.setState({isLoading: true})
    this.props.changePhoneValidationStatus('sending_phone')

    axios.patch(url, values).then(

        response => {
          console.log(response.data)
          this.props.changePhoneValidationStatus('get_code')
        },
        response => {
          this.setState({isLoading: false})
          this.props.addNotification(response.message, 'is-danger')
        }
    )
  }

  render()  {

    const { handleSubmit } = this.props

    return (

      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
          <div className="card" >
            <div className="card-content" >
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
          </div>
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

export default reduxForm({ validate, form: 'EditProfilePhoneForm' })(
  connect(null, {addNotification})(EditProfilePhoneNumber)
)
