import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

export default function DeleteBook() {
  const { id } = useParams();
  console.log("delete book id: ", id);
  const navigate = useNavigate();
  <Loading />;
  axios
    .delete(`http://localhost:5555/books/deletebook/${id}`)
    .then((res) => {
      console.log(res);
      navigate("/");
    })
    .catch((err) => {
      alert("error while deleting/fetching: ", err);
      navigate("/");
    });
}
