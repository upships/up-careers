import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class AppMenu extends Component {

  render()  {

    return (

          <div className="navbar-start">

            <NavLink className="navbar-item" activeClassName="is-active" to="/">Careers Home</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/jobs">Open jobs</NavLink>

          </div>
    )
  }
}

export default AppMenu
