import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { addProfileItem } from '../../actions'

import WorkList from '../profile/work-list'

const positionsList = [{value:1, label: 'Chief Officer'},{value:2, label: 'Master'},{value:3, label: 'Second Officer'},{value:4, label: '2nd Engineer'}]
const shipsTypesList = [{value:1, label: 'Tanker'},{value:2, label: 'AHTS'},{value:3, label: 'PSV'},{value:4, label: 'Containership'}]

class EditProfileWork extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.addProfileItem(values, 'work', () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { works } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-header" >
                    <p className="card-header-title" >Add work</p>
                  </div>
                  <div className="card-content" >

                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >

                      <div className="columns" >

                        <div className="column" >
                          <Field
                            name="position_id"
                            label="Work *"
                            options={positionsList}
                            component={FormSelect}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="started_at"
                            label="Start date"
                            type="text"
                            placeholder="Start date"
                            component={FormDate}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="ended_at"
                            label="End date"
                            type="text"
                            placeholder="End date"
                            component={FormDate}
                          />
                        </div>
                      </div>

                      <div className="columns" >
                        <div className="column" >
                          <Field
                            name="company_name"
                            label="Company name"
                            type="text"
                            placeholder="Company name"
                            component={FormInput}
                          />
                        </div>

                        <div className="column" >
                          <Field
                            name="ship_type_id"
                            label="Work *"
                            options={shipsTypesList}
                            component={FormSelect}
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
                <h4 className="title" >Existing experience</h4>

                <WorkList works={works} />

              </div>

            </div>
          )
  }
}

function validate(values) {
  const errors = {}

  if(!values.position_id) {
    errors.position_id = "Please inform a position"
  }

  return errors
}

EditProfileWork = reduxForm({ validate, form: 'EditProfileWorkForm' })(EditProfileWork)

function mapStateToProps(state) {
  return {works: state.profile.works}
}

EditProfileWork = connect(mapStateToProps, {addProfileItem})(EditProfileWork)

export default EditProfileWork
