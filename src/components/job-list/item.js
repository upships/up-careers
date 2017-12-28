import React from 'react'
import { Link } from 'react-router-dom'

export default function JobListItem({job, mode}) {

  if(mode === 'list')  {

    return (

        <div className="card" >
          <div className="card-content" >
            <div className="level" >

              <div className="level-left" >
                <div className="level-item" >
                  <div className="control" >
                    <Link className="title is-5" to={`/jobs/${job.identifier}`} >{job.position.label}</Link>
                    <p>Posted on {job.date}</p>
                  </div>
                </div>
              </div>
              <div className="level-right" >
                <div className="level-item" >
                  <Link className="button is-info" to={`/jobs/${job.identifier}`} >View &amp; Apply</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
  }

  return (
    <div className="content" >
      <div className="card" >
        <div className="card-content" >
          <Link className="title" to={`/jobs/${job.identifier}`} >{job.position.label}</Link>
          <p>Posted on {job.date}</p>
        </div>
        <footer className="card-footer" >

          <Link className="card-footer-item" to={`/jobs/${job.identifier}`} >
            <span className="icon" ><i className="fas fa-info-circle"></i></span>
            <span>Details</span>
          </Link>

          <Link className="card-footer-item" to={`/jobs/${job.identifier}/apply`} >
            <span className="icon" ><i className="fas fa-check"></i></span>
            <span>Apply</span>
          </Link>

          <Link className="card-footer-item" to={`/jobs/${job.identifier}/share`} >
            <span className="icon" ><i className="fas fa-share"></i></span>
            <span>Share</span>
          </Link>

          <Link className="card-footer-item" to={`/jobs/${job.identifier}/save`} >
            <span className="icon" ><i className="fas fa-heart"></i></span>
            <span>Save</span>
          </Link>

        </footer>
      </div>
    </div>
  )
}
