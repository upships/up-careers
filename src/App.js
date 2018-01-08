import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import ProtectedRoute from './components/protected-routes'
import AppNav from './components/interface/nav.js'
import AppMessages from './components/interface/notifications'

import { initialSetup } from './actions'

import { Home , Jobs, Job, AccountLogin, AccountRegister, AccountLogout } from './pages'
import Onboarding from './pages/Onboarding'
import { ErrorPageNotFound } from './pages/Extras'

class App extends Component {

  componentWillMount()  {

    /* Axios configuration */
    axios.defaults.baseURL = process.env.REACT_APP_API_ROOT_URL

    /* Load page data */
    this.props.initialSetup()
  }

  renderHelmet()  {
    return (
      <Helmet>
        <title>UpShips Careers Portal</title>
        <meta name="author" content="UpShips Technology" />
        <meta name="keywords" content="Careers, Maritime, Shipping, UpShips" />
        <meta name="description" content="Careers portal for UpShips customers." />
        <meta name="robots" content="index,follow,noodp" />
        <meta http-equiv="expires" content="-1" />
        <meta name="revisit-after" content="1 days" />
        <meta property="og:title" content="UpShips" />
        <meta property="og:description" content="UpShips Careers Page" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upships.com" />
      </Helmet>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          {this.renderHelmet()}

          <AppNav />
          <AppMessages />

          <Switch>

            <Route path="/jobs/:id" component={Job} />
            <Route path="/jobs" component={Jobs} />

            <Route path="/account/signin" component={AccountLogin} />
            <Route path="/account/register" component={AccountRegister} />
            <Route path="/account/logout" component={AccountLogout} />

            <ProtectedRoute path="/onboarding" component={Onboarding} />

            <Route path="/" component={Home} exact/>

            <Route component={ErrorPageNotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state)  {
  return { app: state.app, auth: state.auth }
}

export default connect(mapStateToProps, { initialSetup } )(App)
