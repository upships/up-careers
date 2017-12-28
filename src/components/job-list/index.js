import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import JobListItem from './item'

class JobList extends Component {

  renderJobs() {

    return _.map(this.props.jobs.list, job => { return ( <JobListItem job={job} key={job.identifier} mode={this.props.mode} />) })
  }

  render()  {

    if(!Object.keys(this.props.jobs.list).length > 0)  {

      return (

        <div className="card">
          <div className="card-content"  >
            <p>No active jobs at the moment.</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                Create an <Link to="/account/register">Unsolicited Application</Link>
              </span>
            </p>
          </footer>
        </div>
      )
    }

    return (

      <div>
          {this.renderJobs()}
      </div>

    )

  }
}

export default JobList
