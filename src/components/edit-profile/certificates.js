import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { addProfileItem } from '../../actions'

import CertificateList from '../profile/certificate-list'

const certificateTypesList = [{value:1, label: 'DP'},{value:2, label: 'HUET'},{value:3, label: 'HLO'},{value:4, label: 'BOSIET'}]
//const countriesList = [{value: 1, label: 'Brazil'},{value: 2, label: 'United States'},{value: 3, label: 'Norway'},{value: 4, label: 'United Kingdom'},{value: 5, label: 'India'}]

class EditProfileCertificate extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.addProfileItem(values, 'certificate', () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { certificates } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-header" >
                    <p className="card-header-title" >Add certificate</p>
                  </div>
                  <div className="card-content" >

                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

                      <div className="columns" >

                        <div className="column" >
                          <Field
                            name="certificate_type_id"
                            label="Certificate *"
                            options={certificateTypesList}
                            component={FormSelect}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="issued_at"
                            label="Issued at"
                            type="text"
                            placeholder="Issue date"
                            component={FormDate}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="expires_at"
                            label="Expires at *"
                            type="text"
                            placeholder="Expiration date"
                            component={FormDate}
                          />
                        </div>
                      </div>

                      <div className="columns" >
                        <div className="column" >
                          <Field
                            name="number"
                            label="Document number"
                            type="text"
                            placeholder="Document number"
                            component={FormInput}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="remarks"
                            label="Remarks"
                            type="text"
                            placeholder="Remarks"
                            component={FormInput}
                          />
                        </div>
                      </div>

                      <div className="field is-grouped">
                        <div className="control">
                          <button className={`button is-primary ${ this.props.submitting ? 'is-loading' : null }` }>Add item</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="content" >
                <h4 className="title" >Existing certificates</h4>

                <CertificateList certificates={certificates} />

              </div>

            </div>
          )
  }
}

function validate(values) {
  const errors = {}

  if(!values.certificate_type_id) {
    errors.certificate_type_id = "Please inform a certificate type"
  }

  return errors
}

EditProfileCertificate = reduxForm({ validate, form: 'EditProfileCertificateForm' })(EditProfileCertificate)

function mapStateToProps(state) {
  return {certificates: state.profile.certificates}
}

EditProfileCertificate = connect(mapStateToProps, {addProfileItem})(EditProfileCertificate)

export default EditProfileCertificate
