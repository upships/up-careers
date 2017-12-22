import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { loadJobs } from '../../actions'
import JobListItem from './item'
import _ from 'lodash'

class JobList extends Component {

  // constructor(props) {
  //   super(props)
  // }

  componentDidMount()  {

    this.props.loadJobs()
  }

  renderJobs() {

    return _.map(this.props.jobs.list, job => { return ( <JobListItem job={job} key={job.identifier} />) })
  }

  render()  {

    if(this.props.jobs.loading) {

        return (
          <div className="card">
            <div className="card-content"  >
              <p className="control" >
                <span className="icon" >
                  <i className="fas fa-spinner fa-spin" ></i>
                </span>
                <span>
                  Loading data
                </span>
              </p>
            </div>
          </div>
        )
    }

    if(!Object.keys(this.props.jobs.list).length > 0)  {

      return (

        <div className="card">
          <div className="card-content"  >
            <p>No active jobs at the moment.</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
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

function mapStateToProps(state)  {
  return {jobs: state.jobs}
}

export default connect(mapStateToProps, { loadJobs })(JobList)
