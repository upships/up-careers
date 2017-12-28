import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JobRequirements from './requirements'
import JobBenefits from './benefits'
import JobTags from './tags'

class Job extends Component {

  renderTag(value)  {

    return (
              <div className="control" >
                <div className="tag" >
                  {value}
                </div>
              </div>
          )
  }

  render()  {

    const {job} = this.props

    return (
        <div>
          <div className="level" >
            <div className="level-left" >
              <Link to={`/jobs/${job.identifier}/apply`} className="button is-success is-medium" >Apply to this job</Link>
            </div>

            <div className="level-right" >
              <JobTags job={job} />
            </div>
          </div>

          <div className="content" >{job.description}</div>

          <JobRequirements job={job} />

          <JobBenefits />

        </div>
    )
  }

}

export default Job
