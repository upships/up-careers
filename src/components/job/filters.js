import React, { Component } from 'react'

export default class JobFilters extends Component {

  renderFilterValues(values) {

    return values.map( ({label}, key) => { return (<li key={`jrfi-${key}`} >{label}</li>) } )
  }

  renderFilters() {
    return this.props.filters.map( (item, key) => {

      return (
        <div className="column" key={`jrf-${key}`} >
          <div className="card" >
            <div className="card-content" >
              <h4 className="title" >{item.label}</h4>

              <ul>{this.renderFilterValues(item.values)}</ul>
            </div>
          </div>
        </div>
      )
    })
  }

  // Name, Label, Values - Label

  render()  {

    return (

      <div className="columns" >
          {this.renderFilters()}
      </div>


    )
  }
}
