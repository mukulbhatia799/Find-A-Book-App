import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <>
      <div className="w-screen h-screen bg-white flex justify-center items-center ">
        <AiOutlineLoading3Quarters size={50} />
      </div>
    </>
  );
}
