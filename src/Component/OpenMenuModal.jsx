import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";


export default function OpenMenuModal() {
  return (
    <div className="block md:hidden">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <IoIosMenu  className=" w-9 h-9 font-bold pl-2"/>
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col justify-center items-center gap-7 modal-box">
         <Link to={"/home"}>Home</Link>
         <Link to={"/books"}>Books</Link>
         <Link to={"/aboutUs"}>About us</Link>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
