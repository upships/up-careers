import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma-extensions/bulma-carousel/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/carousel.min.js'

//import SliderItem from './item'

class HomeSliders extends Component {

  renderSlide() {

    if(this.props.slides) {

      //return (<SliderItem slide={this.props.slides[0]} baseUrl={this.props.baseUrl} />)
    }
  }
  render()  {

    const { slides , baseUrl } = this.props

    const containerStyle = {
        background: '#000',
        opacity: '0.5'
    }

    const textStyle = {
      color: '#fff',
      textShadow: '2px 2px #000'
    }

    return (

      <section className="hero is-large">
        <div className="hero-carousel">
          <div className='carousel-container' >
            <div className='carousel-content carousel-animate carousel-animate-fade' >
              <div className='carousel-item'>
                <img className="is-background" src="https://up-recruiter.dev/images/1509763863_59fd2b178b745.jpeg" alt="" />
              </div>
              <div className='carousel-item'>
                <img className="is-background" src="https://up-recruiter.dev/images/1509762318_59fd250e55d76.jpeg" alt="" />
              </div>
              <div className='carousel-item'>
                <img className="is-background" src="https://up-recruiter.dev/images/1509762318_59fd250e55d76.jpeg" alt="" />
              </div>
            </div>
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="carousel-nav-right">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="hero-body has-text-centered">

          <div className="container">
            <h1 className="title is-1" style={textStyle}>Welcome</h1>
            <p className="subtitle" style={textStyle} >Your career at sea starts here.</p>
          </div>

        </div>

      </section>

    )

  }

}

export default HomeSliders
