import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'

import { FormInput, FormSelect } from '../../components/interface/form-inputs'
import { updateProfile, addNotification } from '../../actions'
import LoadingMessage from '../interface/loader'

import EditProfilePhoneNumber from './phone-number'
import EditProfilePhoneValidation from './phone-validation'

class EditProfilePhone extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false, step: 'get_phone'}
  }

  renderSteps() {

    switch(this.state.step) {
      case 'get_phone':
        return <EditProfilePhoneNumber changePhoneValidationStatus={ (step) => this.setState({step: step}) }  />

      case 'sending_phone':
        return <LoadingMessage />

      case 'sending_code':
        return <LoadingMessage />

      case 'get_code':
        return <EditProfilePhoneValidation changePhoneValidationStatus={ (step) => this.setState({step: step}) } />

      case 'phone_validated':

        this.props.updateProfile()

        return (
          <div className="notification is-success" >
            Phone validated!
          </div>
        )

      default:
        return <EditProfilePhoneNumber changePhoneValidationStatus={ (step) => this.setState({step: step}) } />
    }
  }

  render()  {

    const { handleSubmit } = this.props

    return (

      <div>
        <h4 className="title is-4" >Phone number validation</h4>
        {this.renderSteps()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {profile: state.profile}
}

export default connect(mapStateToProps, {updateProfile, addNotification})(EditProfilePhone)
