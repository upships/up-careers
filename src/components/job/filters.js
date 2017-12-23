import React, { Component } from 'react'

export default class JobFilters extends Component {

  renderFilterValues(values) {

    return values.map( ({label}) => return <li>{label}</li> )
  }

  renderFilters() {
    return this.props.filters.map( item => {
      return (
        
        <h4 className="title" >{item.label}</h4>

        <ul>{this.renderFilterValues(item.values)}</ul>

        // Name, Label, Values - Label
      )
    })
  }

  render()  {

    return (




    )
  }
}
