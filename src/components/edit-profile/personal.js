import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { updateProfile } from '../../actions'

const maritalStatusLabels = [{value:0, label: 'Not informed'},{value:1, label: 'Single'},{value:2, label: 'Married'},{value:3, label: 'Divorced'},{value:4, label: 'Other'}]
const genderLabels = [{value:0, label: 'Not informed'},{value:1, label: 'Male'},{value:2, label: 'Female'},{value:3, label: 'Other'}]
const countriesList = [{value: 'BR', label: 'Brazil'},{value: 'US', label: 'United States'},{value: 'NO', label: 'Norway'},{value: 'UK', label: 'United Kingdom'},{value: 'IN', label: 'India'}]
const educationLevels = [{value:0, label: 'Not informed or none'},{value:1, label: 'High school'},{value:2, label: 'College degree'},{value:3, label: 'Masters'},{value:4, label: 'Doctorate'}]

class EditProfilePersonal extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {

    this.setState({isLoading: true})
    this.props.updateProfile(values, () => {this.setState({isLoading: false})}, this.props.mode)
  }

  render()  {

    const { profile } = this.props
    const { handleSubmit } = this.props
    //const stepField = this.props.mode === 'onboarding' ? <Field name="onboarding" component={FormInput} type="" value="1" /> : null

    return (
            <div>

              <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

                <div className="card" >
                  <div className="card-content" >
                    <div className="columns" >
                      <div className="column" >
                        <Field
                          name="gender"
                          label="Gender"
                          type="text"
                          placeholder="Gender"
                          options={genderLabels}
                          component={FormSelect}
                        />
                      </div>

                      <div className="column" >
                        <Field
                          name="birthday"
                          label="Birthday"
                          type="text"
                          placeholder="Birthday"

                          component={FormDate}
                        />
                      </div>

                      <div className="column" >
                        <Field
                          name="marital_status"
                          label="Marital Status"
                          type="text"
                          options={maritalStatusLabels}
                          component={FormSelect}
                        />
                      </div>

                      <div className="column" >
                        <Field
                          name="education_level"
                          label="Highest education level"
                          type="text"
                          options={educationLevels}
                          component={FormSelect}
                        />
                      </div>
                    </div>
                    <div className="columns" >
                      <div className="column" >
                        <Field
                          name="country_id"
                          label="Country"
                          type="text"
                          options={countriesList}
                          component={FormSelect}
                        />
                      </div>
                      <div className="column" >
                        <Field
                          name="state"
                          label="State"
                          type="text"
                          placeholder="State"
                          component={FormInput}
                        />
                      </div>
                      <div className="column" >
                        <Field
                          name="city"
                          label="City"
                          type="text"
                          placeholder="City"
                          component={FormInput}
                        />
                      </div>
                      <div className="column" >

                        <Field
                          name="address"
                          label="Address"
                          type="text"
                          placeholder="Address (optional)"
                          component={FormInput}
                        />

                      </div>
                    </div>
                    
                    <div className="field is-grouped">
                      <div className="control">
                        <button className={`button is-link is-medium ${ this.state.isLoading ? 'is-loading' : null }` }>Save information</button>
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

  if(!values.name) {
    errors.name = "Please inform a name"
  }

  if(!values.birthday) {
    errors.birthday = "Please inform your birthday"
  }

  if(!values.gender) {
    errors.gender = "Please inform your gender"
  }

  if(!values.country) {
    errors.country = "Please inform your country"
  }

  if(!values.city) {
    errors.city = "Please inform your city"
  }

  if(!values.state) {
    errors.state = "Please inform your state/region"
  }

  return errors
}

EditProfilePersonal = reduxForm({ validate, form: 'EditProfilePersonalForm' })(EditProfilePersonal)

function mapStateToProps(state) {
  return {profile: state.profile, initialValues: state.profile}
}

EditProfilePersonal = connect(mapStateToProps, {updateProfile})(EditProfilePersonal)

export default EditProfilePersonal
