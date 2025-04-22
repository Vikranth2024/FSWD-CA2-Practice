import React from 'react'

const BookItem = ( {book} ) => {
  return ( 
    <div className='bg-amber-100 rounded-md p-2 flex flex-col justify-center items-center shadow-xl w-[160px] mb-4 ml-12 '>
        <h1> {book.title} </h1>
        <p>{book.author}</p>
        <p>{book.year}</p>
    </div>
  )
}

export default BookItem