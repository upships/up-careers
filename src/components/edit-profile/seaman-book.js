import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { FormInput, FormToggler, FormSelect, FormDate } from '../../components/interface/form-inputs'
import { addProfileItem } from '../../actions'

import SeamanBookList from '../profile/seaman-book-list'

const ranks = [{value:1, label: 'Master'},{value:2, label: 'Chief Mate'},{value:3, label: 'Second Mate'},{value:4, label: 'Third Mate'}]
const countriesList = [{value: 1, label: 'Brazil'},{value: 2, label: 'United States'},{value: 3, label: 'Norway'},{value: 4, label: 'United Kingdom'},{value: 5, label: 'India'}]

class EditProfileSeamanBook extends Component {

  constructor(props)  {
    super(props)
    this.state = {isLoading: false}
  }

  onSubmit(values) {
    this.setState({isLoading: false})
    this.props.addProfileItem(values, 'seaman_book', () => {this.setState({isLoading: false})}, this.props.mode)
    this.props.reset()
  }

  render()  {

    const { seaman_books } = this.props
    const { handleSubmit } = this.props

    return (
            <div>
              <div className="content" >
                <div className="card" >
                  <div className="card-header" >
                    <p className="card-header-title" >Add Seaman Book</p>
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
                <h4 className="title" >Existing Seaman Books</h4>

                <SeamanBookList seaman_books={seaman_books} />

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

  if(!values.expires_at) {
    errors.expires_at = "Please inform the expiration date"
  }

  return errors
}

EditProfileSeamanBook = reduxForm({ validate, form: 'EditProfileCoEForm' })(EditProfileSeamanBook)

function mapStateToProps(state) {
  return {seaman_books: state.profile.seaman_books}
}

EditProfileSeamanBook = connect(mapStateToProps, {addProfileItem})(EditProfileSeamanBook)

export default EditProfileSeamanBook
