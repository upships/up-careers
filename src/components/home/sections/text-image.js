import React from 'react'

export default function SectionTextImage({title, subtitle}) {

  return (
    <section className="hero is-info" >
      <div className="hero-body" >
        <div className="container" >
          <h2 className="title" >{title}</h2>
          <p>Section text with images.</p>
        </div>
      </div>
    </section>
  )
}
