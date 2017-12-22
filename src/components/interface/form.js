import React from 'react'

export function RenderInput(field)  {

  const { meta: { touched, error} } = field

  const inputClassName = `input  ${ touched && error ? 'is-danger' : ''}`

  return (
    <div className="field">
      <label className="label">{field.label}</label>
      <div className="control">
        <input {...field.input} className={inputClassName} type={field.type} placeholder={field.placeholder} />
      </div>
      { touched ? <p className="help is-danger">{ error}</p> : ''  }
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
