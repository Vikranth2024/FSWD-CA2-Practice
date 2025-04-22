const BookForm = () => {

  return (

    <div className="bg-amber-100 p-4 w-[290px] ml-50 pt-10 shadow-2xl rounded-lg">
        <form className="flex flex-col items-center">
        <input type="text" placeholder="Title" 
            className="w-52 bg-white p-1 outline-none border border-none focus:border-none focus:shadow-lg mb-4"
        />

        <input type="text" placeholder="Author" 
            className="w-52 bg-white p-1 outline-none border border-none focus:border-none focus:shadow-lg mb-4"

        />

        <input type="number" placeholder="Year"
        className="w-52 bg-white p-1 outline-none border border-none focus:border-none focus:shadow-lg "

        />

        <button className="mt-7 bg-green-600 hover:bg-green-700 p-2 px-6 rounded-3xl " >Add</button>
        </form>
    </div>

  )
}

export default BookForm