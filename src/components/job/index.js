import React from 'react'

export default function Job({job}) {

  return (
    <div className="card card-default" >
      <h4>{job.position.label}</h4>
    </div>
  )

}
