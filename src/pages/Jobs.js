import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadJobs } from '../actions'
import JobList from '../components/job-list'
import AppHeader from '../components/interface/header'
import LoadingMessage from '../components/interface/loader'

class Jobs extends Component {

  componentDidMount()  {

    this.props.loadJobs()
  }

  render()  {

      if(!this.props.jobs) {

          return <LoadingMessage />
      }

      return (

            <div>
              <AppHeader title="Open jobs" subtitle="Browse all our current openings." />

              <section className="section" >
                <div className="container" >
                  <JobList jobs={this.props.jobs} mode="cards" />
                </div>
              </section>

            </div>
      )
  }

}

function mapStateToProps(state)  {
  return {jobs: state.jobs}
}

export default connect(mapStateToProps, { loadJobs })(Jobs)
