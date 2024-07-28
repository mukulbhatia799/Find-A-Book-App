import axios from "axios";
import { useState } from "react";
import DisplayAllBooks from "./DisplayAllBooks";

export default function AddBook({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  return (
    <>
      <h1 className="text-xl text-center font-bold mt-10 mb-3">Add Book</h1>
      <div className="lg:text-xl flex flex-col justify-center items-center lg:flex-row gap-3 lg:gap-10">
        <h1 className="font-bold">Enter details: </h1>
        <div>
          <input
            className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black"
            onChange={(e) => setTitle(() => e.target.value)} 
            value={title}
            type="text"
            placeholder="Title"
          />
        </div>
        <div>
          <input
            className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black"
            onChange={(e) => setAuthor(() => e.target.value)} 
            value={author}
            type="text"
            placeholder="Author"
          />
        </div>
        <div>
          <input
            className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black"
            onChange={(e) => setPublishedYear(() => e.target.value)} 
            value={publishedYear}
            type="text"
            placeholder="Published Year"
          />
        </div>
        <div>
          <button
            onClick={() => {
              if(!title || !author || !publishedYear) {
                return alert("input data is empty!");
              }
              const newBook = {
                title,
                author,
                publishedYear,
              };
              axios
                .post("http://localhost:5555/books/addbook", newBook)
                .then((res) => {
                  setBooks([...books, res.data.book]);
                })
                .catch((err) => {
                  alert("error: ", err);
                });
                setTitle(() => "");
                setAuthor(() => "");
                setPublishedYear(() => "");
            }}
            className="bg-[#647C90] border-[1px] font-semibold hover:bg-blue-500 hover:border-[1px] hover:border-black p-2 rounded-xl"
          >
            Add book
          </button>
        </div>
      </div>
    </>
  );
}
