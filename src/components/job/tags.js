import React, { Component } from 'react'

export default class JobFilters extends Component {


  render()  {

    const { job } = this.props
    
    return (
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
          )
  }
}
