import { useState } from "react";
import axios from "axios";
import AddBook from "./AddBook";
import DisplayAllBooks from "./DisplayAllBooks";

export default function Home() {
  const [books, setBooks] = useState([]);
  return (
    <div className="bg-[#E2DED0] max-w-full min-w-fit">
      <div className="font-bold text-3xl text-center mt-10">Find a book</div>
      <AddBook books={books} setBooks={setBooks}/>
      <DisplayAllBooks books={books} setBooks={setBooks}/>
    </div>
  );
}
