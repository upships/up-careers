import React from 'react'

export function FormToggler(field)  {
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
