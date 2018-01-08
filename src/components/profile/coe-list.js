import React from 'react'
import _ from 'lodash'

export default function CoeList({coes})  {

  const coeItems = _.map(coes, (coe) => {

    return (
      <div className="card" key={`coe-item-${coe.id}`} >
        <div className="card-content" >
          <h5 className="title">{coe.rank.label} ({coe.rank.code})</h5>
          {coe.country.name} (Expires in {coe.expiration_date})
        </div>
      </div>
    )
  })

  return (
    <div>
      {coeItems}
    </div>
  )
}
