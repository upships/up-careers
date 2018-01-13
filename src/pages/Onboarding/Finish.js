import React, { Component } from 'react'

import LinkList from '../../components/interface/link-list'
import LinkListItem from '../../components/interface/link-list-item'

export default function OnboardingFinish() {

  return (
    <div >
      <div className="content has-text-centered has-text-success" >
        <h1 className="title has-text-success" >
          <i className="fas fa-check" /><br/>
          Your profile has been created!
        </h1>
      </div>

      <div className="content has-text-centered" >
        <p>Now you can apply to our job openings, save documents and certificates and also track your applications.</p>
        <p>If you do not find an opening that matches your profile, don&#39;t worry. We now have your resume on file and our recruiters use the database to find candidates whenever needed.</p>
      </div>

      <div className="content has-text-centered" >
        <LinkList>
          <LinkListItem to="/" >
            View open jobs
          </LinkListItem>
          <LinkListItem to="/" >
            Upload documents
          </LinkListItem>
          <LinkListItem to="/" >
            Go to dashboard
          </LinkListItem>
        </LinkList>
      </div>
    </div>
  )
}
