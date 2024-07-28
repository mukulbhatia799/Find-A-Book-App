import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function DisplayAllBooks({books, setBooks}) {
  // console.log("books.length: ", books.length, books);
  // console.log("displaying books");
  useEffect(() => {
    axios
      .get("http://localhost:5555/books/getbooks")
      .then((res) => {
        console.log("displaying books in displayallbooks: ", books);
        setBooks(res.data.books)
      })
      .catch((error) => console.log("fetching books error: ", error));
  }, [setBooks]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-center mt-10 mb-5 font-bold">Books Available</h1>
        {books.length == 0 ? (
          <div className="w-96 h-80 shadow-lg bg-gray-300 flex justify-center items-center text-gray-600 text-xl hover:bg-gray-200">
            Add Books
          </div>
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center truncate max-w-[100px]">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.publishedYear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/findabook/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" title="Info"/>
                      </Link>
                      <Link to={`/books/updatebook/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" title="Edit"/>
                      </Link>
                      <Link to={`/books/deletebook/${book._id}`}>
                      {console.log("book._id: ", book)}
                        <MdOutlineDelete className="text-2xl text-red-600" title="Delete"/>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
