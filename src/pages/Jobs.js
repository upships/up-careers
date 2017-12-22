import React, { Component } from 'react'
import JobList from '../components/job-list'
import AppHeader from '../components/interface/header'

class Jobs extends Component {

  render()  {

      return (

            <div>
              <AppHeader title="Open jobs" subtitle="Browse all our current openings." />

              <section className="section" >
                <div className="container" >
                  <JobList />
                </div>
              </section>

            </div>
      )
  }

}

export default Jobs
