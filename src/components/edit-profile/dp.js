import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { addProfileItem } from '../../actions'

import DpList from '../profile/dp-list'
const dpTypesList = [{value: 1, label: 'Basic'},{value: 2, label: 'Limited'},{value: 3, label: 'Unlimited Offshore'},{value: 4, label: 'Shuttle Tanker'}]

class EditProfileCoe extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.addProfileItem(values, 'dp', () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { dp } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-header" >
                    <p className="card-header-title" >Add Dynamic Positioning</p>
                  </div>
                  <div className="card-content" >

                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

                      <div className="columns" >
                        <div className="column" >
                          <Field
                            name="dp_type_id"
                            label="Type *"
                            options={dpTypesList}
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
                            name="number"
                            label="Document number"
                            type="text"
                            placeholder="Document number"
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
                <h4 className="title" >Existing DP</h4>

                <DpList dp={dp} />

              </div>

            </div>
          )
  }
}

function validate(values) {
  const errors = {}

  if(!values.dp_type_id) {
    errors.dp_type_id = "Please inform a DP type"
  }

  return errors
}

EditProfileCoe = reduxForm({ validate, form: 'EditProfileCoEForm' })(EditProfileCoe)

function mapStateToProps(state) {
  return {dp: state.profile.dp}
}

EditProfileCoe = connect(mapStateToProps, {addProfileItem})(EditProfileCoe)

export default EditProfileCoe
