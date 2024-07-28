import { useState } from "react";
import AddBook from "./AddBook";
import DisplayAllBooks from "./DisplayAllBooks";

export default function Home() {
  const [books, setBooks] = useState([]);
  return (
    <>
      <div className="font-bold text-3xl text-center w-full h-full">Find a book</div>
      <AddBook books={books} setBooks={setBooks}/>
      <DisplayAllBooks books={books} setBooks={setBooks}/>
    </>
  );
}