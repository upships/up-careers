import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { deleteNotification, clearNotifications } from '../../actions'

class AppNotifications extends Component {

  renderNotifications = () => {

    const { notifications } = this.props

    return _.map(notifications, ({id, message, type}) => {

      return (
        <div key={`nli-${id}`} className={`notification ${type}`} onClick={() => this.props.deleteNotification(id)}>

          <p>{message}</p>

          <p className="is-size-7" >Click to close</p>
        </div>
      )

    })
  }

  render()  {

    const { notifications } = this.props

    if(Object.keys(notifications).length > 0)  {

      return (
        <section className="section">
          <div className="container" >
            { this.renderNotifications() }
          </div>
        </section>
      )
    }

    return null
  }
}


function mapStateToProps(state) {
  return {notifications: state.notifications}
}

export default connect(mapStateToProps, { deleteNotification, clearNotifications })(AppNotifications)
