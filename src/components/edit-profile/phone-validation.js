import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { FormInput, FormSelect } from '../../components/interface/form-inputs'
import { profilePhoneValidation, addNotification } from '../../actions'

class EditProfilePhoneValidation extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false, step: 'get_phone'}
  }

  onSubmit(values) {

    const modeQueryParam = this.props.mode ? `?mode=${this.props.mode}` : ''
    const url = `/api/profile/validate_phone${modeQueryParam}`

    this.setState({isLoading: true, step: 'sending_phone'})
    this.props.changePhoneValidationStatus('sending_code')

    axios.patch(url, values).then(

        response => {
                this.props.changePhoneValidationStatus('phone_validated')
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
              <p>Please insert the code you received on your phone</p>

              <Field
                name="code"
                label="Code"
                placeholder="Code you received"
                type="text"
                component={FormInput}
              />

              <div className="field is-grouped">
                <div className="control">
                  <button className={`button is-link ${ this.state.isLoading ? 'is-loading' : null }` }>Validate code</button>
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
  if(!values.code) {
    errors.code = "Please insert a code"
  }
  return errors
}

export default reduxForm({ validate, form: 'EditProfilePhoneValidationForm' })(
  connect(null, {addNotification})(EditProfilePhoneValidation)
)
