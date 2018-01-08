import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput } from '../../components/interface/form-inputs'
import { updateProfile } from '../../actions'

class EditProfileSeafaring extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: true})
    this.props.addProfileSeafaring(values, () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { profile } = this.props
    const { handleSubmit } = this.props

    return (
            <div>

            </div>
          )
  }
}

function mapStateToProps(state) {
  return {profile: state.profile}
}

export default reduxForm({form: 'EditProfileSeafaringForm' })(
  connect(mapStateToProps, {updateProfile})(EditProfileSeafaring)
)
