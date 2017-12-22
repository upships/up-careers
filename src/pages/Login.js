import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import AppHeader from '../components/interface/header'
import LoginForm from '../components/auth/login'

class Login extends Component {

  render()  {

    if(this.props.auth.isLoggedIn)  {
      return <Redirect to="/account" />
    }

    /*

    <div className="column" >
      <h2 className="title" >Connect with social media</h2>
    </div>

    */

    return (

      <div>
        <Helmet>
          <title>Access your account - {this.props.app.name}</title>
        </Helmet>

        <AppHeader title="Access your account" subtitle="Manage your resume, check application status and much more." />

        <section className="section" >
          <div className="container" >
            <div className="notification is-primary" >
              Don't have an account? <Link to="/account/register"  >Click here to sign up</Link>
            </div>

            <div className="columns" >

              <div className="column" >

                <h2 className="title" >Email &amp; password</h2>

                <LoginForm />

              </div>
            </div>
          </div>
        </section>
      </div>

    )



  }

}

function mapStateToProps(state) {
  return {auth: state.auth, app: state.app }
}

export default connect(mapStateToProps)(Login)
