import React, { Component } from 'react'

// import JobCertificates from './certificates'
// import JobExperience from './experience'
// import JobLanguages from './languages'
// import JobShips from './ships'
// import JobStcw from './stcw'
// import JobSeamanBook from './seaman-book'

import JobFilters from './filters'

class JobRequirements extends Component {

  render()  {

    const { job } = this.props

    return (

      <div className="content" >
        <h2 className="title" >Requirements</h2>

        <JobFilters filters={job.filters} />

      </div>

    )

  }

}

export default JobRequirements
