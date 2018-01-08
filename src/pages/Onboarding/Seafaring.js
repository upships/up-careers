import React, { Component } from 'react'
import _ from 'lodash'

import EditProfileCoc from '../../components/edit-profile/coc'
import EditProfileCoe from '../../components/edit-profile/coe'
import EditProfileSeamanBook from '../../components/edit-profile/seaman-book'
import EditProfileDp from '../../components/edit-profile/dp'

const tabItems = [
  ['CoC'],
  ['CoEs'],
  ['Seaman Book'],
  ['DP']
]

class OnboardingSeafaring extends Component {

  constructor(props)  {
      super(props)

      this.state = {activeTab: 0}
  }

  renderTabs() {

    const tabs = _.map(tabItems, (item, key) => {
      return (
        <li className={key === this.state.activeTab ? "is-active" : null}
        key={`tabs-${key}`}
        onClick={() => this.setState({activeTab: key})} >
          <a>{item}</a>
        </li>
      )
    })

    return (
      <div className="tabs is-centered is-boxed">
        <ul>{tabs}</ul>
      </div>
    )
  }

  renderContent() {

    switch(this.state.activeTab)  {

      case 0: // CoC / CoE

        return (
          <div>
              <EditProfileCoc />
          </div>
        )

      case 1: // CoE
        return (
          <div>
            <EditProfileCoe />
          </div>
        )

      case 2: // Seaman Book
        return (
          <div>
            <EditProfileSeamanBook />
          </div>
        )

      case 3: // DP
        return (
          <div>
            <h2 className="title is-4" >Dynamic Positioning</h2>

          </div>
        )
    }
  }

  render()  {

    return (
      <div >
        {this.renderTabs()}

        {this.renderContent()}
      </div>
    )
  }
}

export default OnboardingSeafaring
