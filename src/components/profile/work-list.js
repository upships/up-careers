import React from 'react'
import _ from 'lodash'

export default function WorkList({works})  {

  const dates = ({start_date,end_date, is_current}) => {

      if(start_date && end_date)  {
        return <span>from {start_date} to {end_date}</span>
      }

      if(start_date)  {
        return <span>started at {start_date}</span>
      }

      if(end_date)  {
        return <span>ended at {end_date}</span>
      }

      return null
  }

  const worksItems = _.map(works, work => {

    return (
      <div className="card" key={`work-item-${work.id}`} >
        <div className="card-content" >
          <h5 className="title">{work.position.label}</h5>
          <div className="level" >
            <div className="level-item" >
              {work.company_name}
            </div>
            <div className="level-item" >
              {dates(work)}
            </div>
            <div className="level-item" >
              Ships: []
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      {worksItems}
    </div>
  )
}
