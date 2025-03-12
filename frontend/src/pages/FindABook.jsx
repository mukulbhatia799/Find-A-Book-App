import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function FindABook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    axios
      // .get(`https://find-a-book-app-backend.onrender.com/books/findabook/${id}`)
      .get(`http://localhost:5555/books/findabook/${id}`)
      .then((res) => {
        console.log("res: ", res);
        setBookData(res.data);
      })
      .catch((err) => {
        console.log("error occured! ", err);
      });
  }, []); // empty [] means only runs first time.

  return (
    <div>
      <div className="text-center font-bold mt-10 text-2xl">
        Displaying book Data
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col font-bold items-start gap-3 bg-[#a39a76] p-5 rounded-lg">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              <BackButton />
            </button>
            <div>
              Title:&nbsp;
              <span className="bg-white p-1 rounded-lg font-normal">
                {bookData.title}
              </span>
            </div>
            <div>
              Author: &nbsp;
              <span className="bg-white p-1 rounded-lg font-normal">
                {bookData.author}
              </span>
            </div>
            <div>
              Published Year:&nbsp;
              <span className="bg-white p-1 rounded-lg font-normal">
                {bookData.publishedYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
