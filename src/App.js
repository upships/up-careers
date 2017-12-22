import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import { Home , Jobs, Job, Login } from './pages'
import AppNav from './components/interface/nav.js'

import { API_ROOT_URL } from './globals'

/* Axios configuration */

axios.defaults.baseURL = API_ROOT_URL

class App extends Component {
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
            <Route path="/account/signin" component={Login} />
            <Route path="/" component={Home} exact/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
