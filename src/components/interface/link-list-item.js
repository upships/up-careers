import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkListItem({to, children})  {
  return (
    <Link className="panel-block" to={to} >
      <span className="panel-icon">
        <i className="fas fa-angle-right"></i>
      </span>
      {children}
    </Link>
  )
}
