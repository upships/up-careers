import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logoutUser } from '../../actions'

class AccountLogout extends Component {

  constructor(props)  {
    super(props)

    this.props.logoutUser()
  }

  render()  {

    if(!this.props.auth.isLoggedIn)  {
      return <Redirect to="/" />
    }

    return (

      <div>
          <p>Logging you out.</p>
      </div>
    )



  }

}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { logoutUser })(AccountLogout)
