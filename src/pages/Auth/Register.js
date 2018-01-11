import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import AppHeader from '../../components/interface/header'
import RegistrationForm from '../../components/auth/register'

class AccountRegister extends Component {

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
          <title>Create an account - {this.props.app.name}</title>
        </Helmet>

        <AppHeader title="Create an account" subtitle="Add your resume, check application status and much more." />

        <section className="section" >
          <div className="container" >

            <div className="columns" >

              <div className="column" >

                <h2 className="title" >Email &amp; password</h2>

                <RegistrationForm />

                <hr/>

                <p className="has-text-centered" >
                  Already have an account?<Link to="/account/signin"  >Click here to log in</Link>
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

export default connect(mapStateToProps)(AccountRegister)
