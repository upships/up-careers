import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadJob } from '../actions'
import AppHeader from '../components/interface/header'
import LoadingMessage from '../components/interface/loader'
import JobView from '../components/job'

class Job extends Component {

  componentDidMount() {

    const { id } = this.props.match.params

    this.props.loadJob(id)
  }

  render() {

    const { job } = this.props

    if(!this.props.job) {

      return <LoadingMessage />
    }

    return (
        <div>
          <AppHeader title={job.position.label} />

          <section className="section" >
            <div className="container" >
              <JobView job={job} />
            </div>
          </section>
        </div>
        )
  }
}

function mapStateToProps({ jobs }, ownProps )  {

  return {job: jobs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { loadJob } )(Job)
