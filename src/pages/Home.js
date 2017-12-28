import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import HomeSliders from '../components/home/slider'
import JobList from '../components/job-list'
import HomeSections from '../components/home/sections'
import LoadingMessage from '../components/interface/loader'

class AppHome extends Component {

  renderJobs()  {

    const {app} = this.props

    if(!this.props.app.newest_jobs)  {

      return <LoadingMessage />
    }

    const jobs = {list: app.newest_jobs, loaded: true, loading: false }

    return <JobList jobs={jobs} mode="list" />
  }

  render()  {

      const {app} = this.props

      if(!app)  {

        return <LoadingMessage />
      }

      return (
        <div>

          <HomeSliders slides={app.careers_page.slides} baseUrl={app.base_url} />

          <section className="section" >
            <div className="container" >
              <h3 className="title" >Featured jobs</h3>

              <div className="content" >
                {this.renderJobs()}
              </div>

              <div className="content" >
                <Link to="/jobs" className="button is-medium is-link" >Browse all openings</Link>
              </div>
            </div>
          </section>

          <HomeSections sections={app.careers_page.sections} />
        </div>
      )
  }

}

function mapStateToProps(state) {
  return {app: state.app, jobs: state.app.newest_jobs }
}

export default connect(mapStateToProps)(AppHome)
