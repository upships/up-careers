import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { addProfileItem } from '../../actions'

import CoeList from '../profile/coe-list'

const ranks = [{value:1, label: 'Master'},{value:2, label: 'Chief Mate'},{value:3, label: 'Second Mate'},{value:4, label: 'Third Mate'}]
const countriesList = [{value: 1, label: 'Brazil'},{value: 2, label: 'United States'},{value: 3, label: 'Norway'},{value: 4, label: 'United Kingdom'},{value: 5, label: 'India'}]

class EditProfileCoe extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.addProfileItem(values, 'coe', () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { coes } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-header" >
                    <p className="card-header-title" >Add CoEs</p>
                  </div>
                  <div className="card-content" >

                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

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
                          <button className={`button is-primary ${ this.props.submitting ? 'is-loading' : null }` }>Add item</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="content" >
                <h4 className="title" >Existing CoEs</h4>

                <CoeList coes={coes} />

              </div>

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

EditProfileCoe = reduxForm({ validate, form: 'EditProfileCoEForm' })(EditProfileCoe)

function mapStateToProps(state) {
  return {coes: state.profile.coes}
}

EditProfileCoe = connect(mapStateToProps, {addProfileItem})(EditProfileCoe)

export default EditProfileCoe
