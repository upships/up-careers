import React from 'react'
// import 'flatpickr/dist/themes/light.css'
// import DatePicker from 'react-flatpickr'

export function FormDate(field)  {

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

// return (
//   <div className="field">
//     <label className="label">{field.label}</label>
//     <div className="control">
//
//       <DatePicker className={inputClassName}
//         {...field.input}
//       />
//
//     </div>
//     { touched ? <p className="help is-danger">{error}</p> : ''  }
//   </div>
// )
