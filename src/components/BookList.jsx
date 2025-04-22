import BookItem from './BookItem'

const BookList = () => {

    const books = [
        { id : 1, title : "Harry Potter", author : "J K Rowling", year : 1990 },
        { id : 2, title : "Wings of India", author : "Abdul Kalam", year : 2004 },
        { id : 3, title : "Psycology of Money", author : "Morgan Housel", year : 2020 },
    ]


  return (
    <div>
        <h1 className="font-bold text-3xl p-3 pl-17 m-7 ml-50">Book List</h1>

        <div className='bg-green-500 rounded-xl p-5 w-[295px] ml-50 h-82 shadow-2xl'>

            {books.map((b)=> (
            <BookItem key={b.id} book={b} />
        ))}
        
        </div>
        

    </div>
  )
}

export default BookList