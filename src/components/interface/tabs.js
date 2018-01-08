import React from 'react'

export default function Tabs({items, active, callback})  {

  const number = Math.floor(Math.random() * 1000)

  const tabItems = _.map(items, (item, key) => {
    return (
      <li className={key === active ? "is-active" : null}
      key={`tabs-${number}-${key}`}
      onClick={() => callback} >
        <a>{item}</a>
      </li>
    )
  })

  return (
    <div className="tabs is-centered is-boxed">
      <ul>{tabItems}</ul>
    </div>
  )
}
