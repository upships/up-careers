import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput } from '../../components/interface/form-inputs'
import { updateProfile, addProfileItem } from '../../actions'
import EducationList from '../profile/education-list'

class EditProfileEducation extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: true})
    this.props.addProfileItem(values, 'education', () => {this.setState({isLoading: false})})
    this.props.reset()
  }

  render

  render()  {

    const { profile } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-content" >
                    <h4 className="title" >Add education</h4>

                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
                      <div className="columns" >
                        <div className="column" >
                          <Field
                            name="label"
                            label="Degree or course"
                            type="text"
                            placeholder="Degree or course"
                            component={FormInput}
                          />
                        </div>
                        <div className="column" >
                          <Field
                            name="school"
                            label="School"
                            type="text"
                            placeholder="School"
                            component={FormInput}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="start_year"
                            label="Start year"
                            type="text"
                            placeholder="Start year"
                            component={FormInput}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="end_year"
                            label="End year"
                            type="text"
                            placeholder="End year"
                            component={FormInput}
                          />
                        </div>
                      </div>
                      <div className="field is-grouped">
                        <div className="control">
                          <button className={`button is-primary ${ this.state.isLoading ? 'is-loading' : null }` }>Insert education</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="content" >
                <h4 className="title" >Existing education</h4>

                <EducationList education={profile.education} />

              </div>
            </div>
          )
  }
}

function mapStateToProps(state) {
  return {profile: state.profile}
}

export default reduxForm({form: 'EditProfileEducationForm' })(
  connect(mapStateToProps, {updateProfile, addProfileItem})(EditProfileEducation)
)
