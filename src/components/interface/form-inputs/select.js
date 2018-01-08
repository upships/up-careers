import React, { Component } from 'react'
import _ from 'lodash'

export class FormSelect extends Component  {

  renderOptions() {
    const { options } = this.props
    const key = Math.floor(Math.random() * 10000)
    return _.map(options, ({value, label}) => { return <option key={`${key}-${value}`} value={value} >{label}</option> } )
  }

  render() {

    const field = this.props
    const { meta: { touched, error} } = field
    const inputClassName = `select ${touched && error ? 'is-danger' : ''}`

    return (
      <div className="field">
        <label className="label">{field.label}</label>
        <div className="control">
          <div className={inputClassName}>
            <select {...field.input} >
              <option value="" >-- Select --</option>
              {this.renderOptions()}
            </select>
          </div>
        </div>
        { touched ? <p className="help is-danger">{ error}</p> : ''  }
      </div>
    )
  }
}
