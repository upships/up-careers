import React from 'react'

export default function InfoMessage({icon, type, children}) {
  return (
    <div className={`help ${type ? type : 'is-info' }`} >
      <span className="icon" ><i className={`fas fa-${icon}`} ></i></span>
      <span>{children}</span>
    </div>
  )
}
