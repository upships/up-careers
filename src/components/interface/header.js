import React, { Component } from 'react'

export default class AppHeader extends Component {

  renderSubtitle()  {

    if(this.props.subtitle) {
      return (
        <p className="subtitle">
          {this.props.subtitle}
        </p>
      )
    }
  }

  render() {

    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {this.props.title}
            </h1>

            {this.renderSubtitle()}

          </div>
        </div>
      </section>
    )
  }
}
