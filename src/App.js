import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import { Home , Jobs, Job, AccountLogin, AccountRegister, AccountLogout } from './pages'
import AppNav from './components/interface/nav.js'
import { initialSetup } from './actions'

import { OnboardingPersonal, OnboardingPhone, OnboardingEducation, OnboardingCertificates, OnboardingSeafaring, OnboardingProfessional } from './pages/Onboarding'

/* Axios configuration */

axios.defaults.baseURL = process.env.REACT_APP_API_ROOT_URL

class App extends Component {

  componentWillMount()  {

      this.props.initialSetup()
  }

  render() {
    return (
      <BrowserRouter>
        <div>

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

          <AppNav />

          <Switch>

            <Route path="/jobs/:id" component={Job} />
            <Route path="/jobs" component={Jobs} />

            <Route path="/account/signin" component={AccountLogin} />
            <Route path="/account/register" component={AccountRegister} />
            <Route path="/account/logout" component={AccountLogout} />

            <Route path="/onboarding/personal" component={OnboardingPersonal} />
            <Route path="/onboarding/phone" component={OnboardingPhone} />
            <Route path="/onboarding/education" component={OnboardingEducation} />
            <Route path="/onboarding/seafaring" component={OnboardingSeafaring} />
            <Route path="/onboarding/certificates" component={OnboardingCertificates} />
            <Route path="/onboarding/professional" component={OnboardingProfessional} />

            <Route path="/" component={Home} exact/>

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
