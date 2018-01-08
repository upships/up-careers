import React, { Component } from 'react'
import 'bulma-extensions/bulma-steps/bulma-steps.min.css'
//import 'bulma-extensions/bulma-steps/steps.min.js'
import _ from 'lodash'

const steps = [
  {step: 1, title: 'Basic', description: 'Personal and contact info.'},
  {step: 2, title: 'Education', description: 'Degrees and qualifications.'},
  {step: 3, title: 'Seafaring', description: 'STCW, COEs, and more.'},
  {step: 4, title: 'Certification', description: 'Certificates and more'},
  {step: 5, title: 'Professional', description: 'Work experience'},
]

export default class OnboardingSteps extends Component {

  renderStepClass(step) {

    const { currentStep } = this.props

    if(parseInt(step, 10) < parseInt(currentStep, 10)) {
      return 'is-completed'
    }
    else if(parseInt(step, 10) === parseInt(currentStep, 10))  {
      return 'is-active'
    }
  }

  renderStepIcon(step)  {
    const {currentStep} = this.props
    return step < currentStep ? <span className="icon"><i className="fa fa-check"></i></span> : null
  }

  renderSteps() {

    const key = Math.ceil(Math.random() * 1000)

    return _.map(steps, ({step, title, description}) => {
      return (
        <div key={`key-${step}`} className={`step-item ${this.renderStepClass(step)}`}>
          <div className="step-marker">
            {this.renderStepIcon(step)}
          </div>
          <div className="step-details">
            <p className="step-title">{title}</p>
            <p>{description}</p>
          </div>
        </div>
      )
    })
  }

  render()  {

    const {currentStep} = this.props

    return (
      <div className="steps is-hidden-mobile">
        {this.renderSteps()}
      </div>
    )
  }
}
