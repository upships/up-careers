import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { RenderInput, RenderToggler } from '../interface/form'
import { authUser } from '../../actions'

class RegistrationForm extends Component {

  constructor(props)  {
    super(props)

    this.state = {isLoading: false}

  }

  onSubmit(values) {

    this.setState({isLoading: true})

    axios.post('/api/auth/register', values).then(

        () => { this.props.authUser(values) }
    )

  }

  render()  {

    const { handleSubmit } = this.props

    return (

      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >


        <Field
          name="name"
          label="Name"
          type="text"
          placeholder="First and last name"
          component={RenderInput}
        />

        <Field
          name="email"
          label="E-mail"
          type="text"
          placeholder="Your e-mail"
          component={RenderInput}
        />

        <Field
          name="password"
          label="Password"
          type="password"
          placeholder="Your password"
          component={RenderInput}
        />

        <Field
          name="password_confirmation"
          label="Password confirmation"
          type="password"
          placeholder="Repeat your password"
          component={RenderInput}
        />

        <Field
          name="save_login"
          label="Keep me logged in"
          type="checkbox"
          component={RenderToggler}
        />

        <div className="field is-grouped">
          <div className="control">
            <button className={`button is-link is-medium ${ this.state.isLoading ? 'is-loading' : null }` }>Create account</button>
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

export default reduxForm({ validate, form: 'RegistrationForm' })(

  connect(null, {authUser})(RegistrationForm)

)
