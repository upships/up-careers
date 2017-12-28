import React from 'react'
import HtmlParser from 'html-react-parser';

export default function SectionText({section}) {

  const { title, subtitle, text } = section

  return (
    <section className="section" >
        <div className="container" >
          <h2 className="title" >{title}</h2>

          <p className="subtitle" >{subtitle ? subtitle : null}</p>

          <div className="content" >
            {HtmlParser(text)}
          </div>
        </div>
    </section>
  )
}
