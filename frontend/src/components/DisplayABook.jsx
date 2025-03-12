import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

export default function DisplayABook(props) {
  return (
    <>
      <tr key={props.bookid} className="h-8">
        <td className="border border-slate-700 rounded-md text-center">
          {props.index + 1}
        </td>
        <td className="border border-slate-700 rounded-md text-center truncate max-w-[100px]">
          {props.title}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {props.author}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {props.publishedYear}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          <div className="flex justify-center gap-x-4">
            <Link to={`/books/findabook/${props.bookid}`}>
              <BsInfoCircle className="text-2xl text-green-800" title="Info" />
            </Link>
            <Link to={`/books/updatebook/${props.bookid}`}>
              <AiOutlineEdit
                className="text-2xl text-yellow-600"
                title="Edit"
              />
            </Link>
            <Link to={`/books/deletebook/${props.bookid}`}>
              <MdOutlineDelete
                className="text-2xl text-red-600"
                title="Delete"
              />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
