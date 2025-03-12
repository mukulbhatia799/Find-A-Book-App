import { useState, useEffect } from "react";
import axios from "axios";

export default function BookSearchAndDisplay({ books, setBooks }) {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/books/bulk?filter=${filter}`)
      .then((res) => {
        setBooks(res.data.book);
      });
  }, [filter]);

  return (
    <div className="px-10 h-fit w-full p-4 bg-[#4e6a95]">
      <div className="flex flex-col gap-4">
        {/* <div className="text-white font-bold text-xl sm:text-2xl">Users</div> */}
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="rounded border font-medium border-black w-full py-2 px-3 text-xs sm:text-2xl"
          placeholder="Search a book..."
        />
      </div>
    </div>
  );
}
