import React from 'react'
import _ from 'lodash'

export default function CoeList({dp})  {

  const dpItems = _.map(dp, (item) => {

    return (
      <div className="card" key={`dp-item-${item.id}`} >
        <div className="card-content" >
          {item.dp_type.label}
        </div>
      </div>
    )
  })

  return (
    <div>
      {dpItems}
    </div>
  )
}
