import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JobRequirements from './requirements'
import JobBenefits from './benefits'

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
              <div className="field is-grouped is-grouped-multiline" >
                <div className="control" >
                  <div className="tag" >
                    Posted on {job.date}
                  </div>
                </div>

                <div className="control" >
                  <div className="tag" >
                    Offshore
                  </div>
                </div>

                <div className="control" >
                  <div className="tag" >
                    Brazil
                  </div>
                </div>

                <div className="control" >
                  <div className="tag" >
                    Vessel type: {job.ship_type.label}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="content" >{job.description}</div>

          <JobRequirements job={job} />

        </div>
    )
  }

}

export default Job
