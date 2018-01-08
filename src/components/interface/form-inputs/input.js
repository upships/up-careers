import React from 'react'

export function FormInput(field)  {

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
