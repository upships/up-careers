import React from 'react'
import _ from 'lodash'

export default function CertificateList({certificates})  {

  const certificatesItems = _.map(certificates, certificate => {

    return (
      <div className="card" key={`certificate-item-${certificate.id}`} >
        <div className="card-content" >
          <h5 className="title">{certificate.certificate_type.label}</h5>
          Expires on {certificate.expiration_date}
        </div>
      </div>
    )
  })

  return (
    <div>
      {certificatesItems}
    </div>
  )
}
