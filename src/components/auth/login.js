import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { RenderInput, RenderToggler } from '../interface/form'
import { authUser } from '../../actions'

class LoginForm extends Component {

  onSubmit(values) {

    this.props.authUser(values, () => {})
  }

  render()  {

    const { handleSubmit } = this.props

    return (

      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >


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
          name="save_login"
          label="Keep me logged in"
          type="checkbox"
          component={RenderToggler}
        />

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link is-medium">Login</button>
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

  return errors
}

export default reduxForm({ validate, form: 'LoginForm' })(

  connect(null, {authUser})(LoginForm)

)
