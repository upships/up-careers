import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AppMenu extends Component {

  render()  {

    return (

          <div className="navbar-start">

            <Link className="navbar-item" to="/">Careers Home</Link>
            <Link className="navbar-item" to="/jobs">Open jobs</Link>

          </div>
    )
  }
}

export default AppMenu
