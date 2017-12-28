import React from 'react'

export default function SectionTitle({section}) {

  const { title, subtitle } = section

  return (
    <section className="hero is-info" >
      <div className="hero-body" >
        <div className="container" >
          <h2 className="title" >{title}</h2>
          <p className="subtitle" >
            {subtitle ? subtitle : null}
          </p>
        </div>
      </div>
    </section>
  )
}
