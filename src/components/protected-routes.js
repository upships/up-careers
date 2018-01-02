import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {

    render() {

        let {auth, component, path, name, exact, strict} = this.props

        let routeProps = {
            path,
            component,
            name,
            exact,
            strict
        }

        return auth.isLoggedIn ? <Route {...routeProps} /> : <Redirect to="/account/signin" />
  }
}

function mapStateToProps({app, auth, profile})  {
  return { app , auth , profile }
}

export default connect(mapStateToProps)(ProtectedRoute)
