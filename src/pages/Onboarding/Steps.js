import React, { Component } from 'react'
import 'bulma-extensions/bulma-steps/bulma-steps.min.css'
//import 'bulma-extensions/bulma-steps/steps.min.js'

export default class OnboardingSteps extends Component {

  renderStepClass(step) {

    const {currentStep} = this.props

    if(step < currentStep) {
      return 'is-completed'
    }
    else if(step === currentStep)  {
      return 'is-active'
    }
  }

  render()  {

    const {currentStep} = this.props

    return (
      <div className="steps">
        <div className={`step-item is-completed ${this.renderStepClass(1)}`}>
          <div className="step-marker">
            <span className="icon">
              <i className="fa fa-check"></i>
            </span>
          </div>
          <div className="step-details">
            <p className="step-title">Basic</p>
            <p>Personal information</p>
          </div>
        </div>
        <div className="step-item is-active">
          <div className="step-marker"></div>
          <div className="step-details">
            <p className="step-title">Step 2</p>
            <p>This is the second step. You get here once you have completed the first step.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-marker">3</div>
          <div className="step-details">
            <p className="step-title">Step 3</p>
            <p>This is the third step. One more last before the end.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-marker">
            <span className="icon">
              <i className="fa fa-flag"></i>
            </span>
          </div>
          <div className="step-details">
            <p className="step-title">Step 4</p>
            <p>Final step. You have completed all the previous steps and end the process.</p>
          </div>
        </div>
      </div>
    )
  }
}
