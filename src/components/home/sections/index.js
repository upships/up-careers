import React, { Component } from 'react'
import SectionTitle from './section-title'
import SectionText from './text'
import SectionTextImage from './text-image'

class HomeSections extends Component {

  renderSections()  {

    if(!this.props.sections) {

      return null

    }

    return this.props.sections.map(

      (section, key) => {

        switch(section.type)  {

          case 'section_title':

            return <SectionTitle key={`home-section-title-${key}`} section={section} />

          case 'text':

            return <SectionText key={`home-section-text-${key}`} section={section} />

          case 'text_with_images':

            return <SectionTextImage key={`home-section-text-image-${key}`} section={section} />

          default:

            return null
        }

      }
    )
  }

  render()  {

    return (
      <div>
        {this.renderSections()}
      </div>
    )

  }

}

export default HomeSections
