import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialSetup, fetchUser } from '../../actions'

import LeftMenu from './nav-items/left'
import RightMenu from './nav-items/right'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class AppNav extends Component {

  constructor(props)  {
    super(props)

    this.state = {menuActive: false}

    if(this.props.auth.isLoggedIn && !this.props.user.hasInfo)  {
      this.props.fetchUser()
    }
  }

  toggleMenu = () => {

    this.setState( ( prevState ) => { return { menuActive: !prevState.menuActive }})
  }

  componentDidMount()  {

      this.props.initialSetup()
  }

  render()  {

    return (

        <nav className="navbar">

        <Helmet>

          <title>{`${this.props.app.name} Careers Portal`}</title>

          <meta name="author" content={`UpShips Technology for ${this.props.app.name}`} />
          <meta name="keywords" content={`${this.props.app.name}, Careers, Maritime, Shipping`} />
          <meta name="description" content={`Careers portal for ${this.props.app.name}.`} />

          <link rel="shortcut icon" href={this.props.app.favicon_url} />

          <meta property="og:title" content="Aliança" />
          <meta property="og:description" content={`${this.props.app.name} Careers Page`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={this.props.app.careers_url} />

        </Helmet>

          <div className="navbar-brand" >
            <Link to="/" className="navbar-item" >
                <img src={this.props.app.logo_url} height="28" alt={this.props.app.name} />
            </Link>

            <div className={`navbar-burger burger ${ this.state.menuActive ? 'is-active' : '' } `} onClick={this.toggleMenu} >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          <div className={`navbar-menu ${ this.state.menuActive ? 'is-active' : '' } `} >
              <LeftMenu menus={this.props.app.careers_page.menus} />
              <RightMenu auth={this.props.auth} app={this.props.app} user={this.props.user} />
          </div>

        </nav>
    )
  }
}

function mapStateToProps(state)  {
  return {app: state.app, auth: state.auth, user: state.user }
}

export default connect(mapStateToProps, { initialSetup, fetchUser } )(AppNav)
