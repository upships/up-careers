import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import AppHeader from '../components/interface/header'
import LoginForm from '../components/auth/login'

class AccountLogin extends Component {

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

            <div className="columns" >

              <div className="column" >

                <h2 className="title" >Email &amp; password</h2>

                <LoginForm />

                <hr/>

                <p className="has-text-centered" >
                  <Link to="/account/register"  >Click here to create an account</Link>
                </p>
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

export default connect(mapStateToProps)(AccountLogin)
