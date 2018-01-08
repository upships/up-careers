import React from 'react'
import _ from 'lodash'

export default function EducationList({education})  {

  const itemDates = (start,end) => {
    if(start && end)  {
      return <span>{start} to {end}</span>
    }
    else {
      if(end) {
        return <span>finish: {end}</span>
      }

      if(start) {
        return <span>started: {end}</span>
      }
    }
  }
  const educationItems = _.map(education, e => {

    return (
      <div className="card" key={`education-item-${e.id}`} >
        <div className="card-content" >
          <h5 className="title">{e.label}</h5>
          {e.school} ({itemDates(e.start_year, e.end_year)})
        </div>
      </div>
    )
  })

  return (
    <div>
      {educationItems}
    </div>
  )
}
