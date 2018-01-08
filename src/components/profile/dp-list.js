import React from 'react'
import _ from 'lodash'

export default function CoeList({dp})  {

  const dpItems = _.map(dp, (item) => {

    return (
      <div className="card" key={`dp-item-${item.id}`} >
        <div className="card-content" >
          <h5 className="title">{item.dp_type.label}</h5>
          Expires in {dp.expiration_date}
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
