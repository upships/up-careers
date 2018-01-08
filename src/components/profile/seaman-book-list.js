import React from 'react'
import _ from 'lodash'

export default function CoeList({seaman_books})  {

  const seamanBookItems = _.map(seaman_books, (book) => {

    return (
      <div className="card" key={`seaman-book-item-${book.id}`} >
        <div className="card-content" >
          <h5 className="title">{book.country.name}</h5>
          Expires in {book.expiration_date}
        </div>
      </div>
    )
  })

  return (
    <div>
      {seamanBookItems}
    </div>
  )
}
