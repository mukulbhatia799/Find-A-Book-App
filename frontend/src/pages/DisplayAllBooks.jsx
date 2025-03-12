import axios from "axios";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import DisplayABook from "../components/DisplayABook";
import DisplayBooksHeading from "../components/DisplayBooksHeading";
import BookSearchAndDisplay from "../components/BookSearchAndDisplay";

export default function DisplayAllBooks({ books, setBooks }) {
  // console.log("books.length: ", books.length, books);
  // console.log("displaying books");
  useEffect(() => {
    axios
      // .get("https://find-a-book-app-backend.onrender.com/books/getbooks")
      .get("http://localhost:5555/books/getbooks")
      .then((res) => {
        console.log("displaying books in displayallbooks: ", res.data.books);
        setBooks(res.data.books);
      })
      .catch((error) => console.log("fetching books error: ", error));
  }, [setBooks]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5">
        <h1 className="text-xl text-center mt-10 mb-5 font-bold">
          Books Available
        </h1>
        <BookSearchAndDisplay books={books} setBooks={setBooks} />
        {books.length == 0 ? (
          // <div className="w-96 h-80 shadow-lg bg-gray-300 flex justify-center items-center text-gray-600 text-xl hover:bg-gray-200">
          //   Add Books
          // </div>
          <>
            <table className="w-full border-separate border-spacing-2">
              <DisplayBooksHeading />
            </table>
            <div className="w-full">
              <h1 className="text-center font-bold py-3 mx-2 bg-[#6b6b57]">
                Empty
              </h1>
            </div>
          </>
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <DisplayBooksHeading />
            <tbody>
              {books.map((book, index) => (
                <DisplayABook
                  key={book._id}
                  bookid={book._id}
                  index={index}
                  title={book.title}
                  author={book.author}
                  publishedYear={book.publishedYear}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
