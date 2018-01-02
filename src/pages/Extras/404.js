import React from 'react'

function ErrorPageNotFound() {

  return (
    <section className="hero is-danger" >
      <div className="hero-body" >
        <div className="container" >
          <h1 className="title" >Error 404</h1>
          <p className="subtitle" >Oh snap! The page you were looking for does not exist.</p>
        </div>
      </div>
    </section>
  )
}

export { ErrorPageNotFound }
