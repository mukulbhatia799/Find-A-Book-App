import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

export default function DeleteBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/deletebook/${id}`)
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("error while deleting/fetching: ", err);
        navigate("/");
      });
  }, []);

  return <>{loading == true ? <Loading /> : <div>Hello</div>}</>;
}
