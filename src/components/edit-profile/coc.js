import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { updateProfileCoc } from '../../actions'

const ranks = [{value:1, label: 'Master'},{value:2, label: 'Chief Mate'},{value:3, label: 'Second Mate'},{value:4, label: 'Third Mate'}]
const countriesList = [{value: 'BR', label: 'Brazil'},{value: 'US', label: 'United States'},{value: 'NO', label: 'Norway'},{value: 'UK', label: 'United Kingdom'},{value: 'IN', label: 'India'}]

class EditProfileCoc extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.updateProfileCoc(values, () => {this.setState({isLoading: false})}, this.props.mode)
  }

  render()  {
    const { profile } = this.props
    const { handleSubmit } = this.props

    return (
            <div>

              <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

                <div className="card" >
                  <div className="card-content" >

                    <div className="columns" >
                      <div className="column" >
                        <Field
                          name="country_id"
                          label="Country *"
                          options={countriesList}
                          component={FormSelect}
                        />
                      </div>

                      <div className="column" >
                        <Field
                          name="rank_id"
                          label="Rank *"
                          options={ranks}
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
                        <button className={`button is-link is-medium ${ this.props.submitting ? 'is-loading' : null }` }>Save</button>
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

  if(!values.country_id) {
    errors.country_id = "Please inform a country"
  }

  if(!values.rank_id) {
    errors.rank_id = "Please inform a rank"
  }

  if(!values.expires_at) {
    errors.expires_at = "Please inform the expiration date"
  }

  return errors
}

EditProfileCoc = reduxForm({ validate, form: 'EditProfileCoCForm' })(EditProfileCoc)

function mapStateToProps(state) {
  return {profile: state.profile, initialValues: state.profile.coc}
}

EditProfileCoc = connect(mapStateToProps, {updateProfileCoc})(EditProfileCoc)

export default EditProfileCoc
