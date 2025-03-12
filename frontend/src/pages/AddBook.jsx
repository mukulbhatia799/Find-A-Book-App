import axios from "axios";
import { useState } from "react";
// import DisplayAllBooks from "./DisplayAllBooks";

export default function AddBook({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mt-10 mb-3">Add Book</h1>
      <div className="lg:text-xl flex flex-col xl:flex-row justify-center items-center gap-3 lg:gap-10">
        <h1 className="font-bold min-w-fit">Enter details: </h1>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
            <input
              className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black"
              onChange={(e) => setTitle(() => e.target.value)}
              value={title}
              type="text"
              placeholder="Title"
            />
            <input
              className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black"
              onChange={(e) => setAuthor(() => e.target.value)}
              value={author}
              type="text"
              placeholder="Author"
            />
            <input
              className="rounded-sm border-[1px] p-1 border-gray-500 hover:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={(e) => setPublishedYear(() => e.target.value)}
              value={publishedYear}
              type="number"
              placeholder="Published Year"
            />
          </div>  
          <button
            onClick={async () => {
              if (!title || !author || !publishedYear) {
                return alert("input data is empty!");
              }
              const newBook = {
                title,
                author,
                publishedYear,
              };
              await axios
                .post(`${import.meta.env.VITE_API_URL}/books/addbook`, newBook)
                .then((res) => {
                  setBooks([...books, res.data.book]);
                })
                .catch((err) => {
                  console.log("error: ", err);
                  alert("error: ", err);
                });
              setTitle(() => "");
              setAuthor(() => "");
              setPublishedYear(() => "");
            }}
            className="bg-[#647C90] border-[1px] font-semibold hover:bg-blue-500 hover:border-[1px] hover:border-black p-2 rounded-xl min-w-fit"
          >
            Add book
          </button>
        </div>
      </div>
    </div>
  );
}
