import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UpdateBook() {
  const { id } = useParams();
  const [bookToUpdate, setBookToUpdate] = useState({});
  const navigate = useNavigate();
  let auxBookData = bookToUpdate;
  useEffect(() => {
    axios
      .put(`http://localhost:5555/books/updatebook/${id}`)
      .then((res) => {
        console.log("res: ", res.data.book);
        auxBookData = res.data.book;
        setBookToUpdate(() => res.data.book);
      })
      .catch((err) => {
        console.log("error while fetching updatebook: ", err);
      });
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-10">Update Details</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-lg lg:w-1/2 p-5 flex flex-col justify-center items-center bg-[#a39a76]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <label className="font-bold">Title: </label>
              <input
                onChange={(e) => {
                  setBookToUpdate((prevValue) => ({
                    ...prevValue,
                    title: e.target.value,
                  }));
                }}
                type="text"
                value={auxBookData.title}
                className="p-1 border hover:border-black w-full"
              ></input>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <label className="font-bold">Author: </label>
              <input
                onChange={(e) => {
                  setBookToUpdate((prevValue) => ({
                    ...prevValue,
                    author: e.target.value,
                  }));
                }}
                type="text"
                value={auxBookData.author}
                className="p-1 border hover:border-black w-full"
              ></input>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <label className="font-bold whitespace-nowrap">
                Published Year:{" "}
              </label>
              <input
                onChange={(e) => {
                  setBookToUpdate((prevValue) => ({
                    ...prevValue,
                    publishedYear: e.target.value,
                  }));
                }}
                type="text"
                value={auxBookData.publishedYear}
                className="p-1 border hover:border-black w-full"
              ></input>
            </div>
            <button
              onClick={() => {
                if (
                  bookToUpdate.title.trim() == "" ||
                  bookToUpdate.author.trim() == "" ||
                  bookToUpdate.publishedYear.trim() == ""
                ) {
                  alert("input can't be empty!");
                } else {
                  console.log("onclick booktoupdate: ", bookToUpdate);
                  axios
                    .put(
                      `http://localhost:5555/books/updatebook/${id}`,
                      bookToUpdate
                    )
                    .then((res) => {
                      console.log("response updatebook: ", res.data.book);
                      navigate("/");
                    })
                    .catch((err) => {
                      console.log("error while updating book data: ", err);
                    });
                }
              }}
              className=" bg-[#81bef1] border-[1px] font-semibold hover:bg-blue-500 hover:border-[1px] hover:border-black p-2 rounded-xl min-w-fit"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
