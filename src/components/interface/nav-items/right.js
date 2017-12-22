import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './menu-item'

class RightMenu extends Component {

  renderCustomMenus()  {

    const customMenus = this.props.app.careers_page.menus

    if(customMenus) {

      return customMenus.map( (menuItem, key) => { return <MenuItem key={`menu-${key}}`} menu={menuItem} /> } )
    }

  }

  renderLoginLinks()  {

    if(this.props.auth.isLoggedIn) {

        const accountLinkItem = (<p className="control"><span className="icon"><i className='fas fa-user'></i></span><span>Account</span></p>)

        return (
          <div className="navbar-end" >
            <Link className="navbar-item" to="/account" >{ this.props.user.hasInfo ? this.props.user.name : accountLinkItem }</Link>
          </div>
        )
    }

    return (

        <div className="navbar-item" >
          <div className="field is-grouped" >

            <p className="control" >

              <Link className="button" to="/account/signin" >
                <span className="icon" >
                  <i className="fas fa-user"></i>
                </span>
                <span>
                  Sign in
                </span>
              </Link>
            </p>

            <p className="control" >
              <Link className="button is-primary" to="/account/register" >
                  Register
              </Link>
            </p>

          </div>
        </div>
      )
  }

  render()  {

    return (

      <div className="navbar-end" >

        <a className="navbar-item" href={`//${this.props.app.url}`} >Company Home</a>

        {this.renderCustomMenus()}

        {this.renderLoginLinks()}

      </div>
    )
  }

}

export default RightMenu
