import React, { Component } from 'react'
import _ from 'lodash'

export function RenderInput(field)  {

  const { meta: { touched, error} } = field

  const inputClassName = `input  ${ touched && error ? 'is-danger' : ''}`

  return (
    <div className="field">
      <label className="label">{field.label}</label>
      <div className="control">
        <input
          {...field.input}
          className={inputClassName}
          type={field.type}

          placeholder={field.placeholder}
        />

      </div>
      { touched ? <p className="help is-danger">{error}</p> : ''  }
    </div>
  )
}

export function RenderToggler(field)  {
  return (

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input {...field.input} type={field.type} /> {field.label}
        </label>
      </div>
    </div>
  )
}

export class RenderSelect extends Component  {

  renderOptions() {
    const { options } = this.props
    const key = Math.floor(Math.random() * 10000)
    return _.map(options, ({value, label}) => { return <option key={`${key}-${value}`} value={value} >{label}</option> } )
  }

  render() {

    const field = this.props
    const { meta: { touched, error} } = field
    const inputClassName = `input  ${ touched && error ? 'is-danger' : ''}`

    return (
      <div className="field">
        <label className="label">{field.label}</label>
        <div className="control">

          <select {...field.input} className={inputClassName} >
            <option value="" >-- Select --</option>
            {this.renderOptions()}
          </select>

        </div>
        { touched ? <p className="help is-danger">{ error}</p> : ''  }
      </div>
    )
  }
}
