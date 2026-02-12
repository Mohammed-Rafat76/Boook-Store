import { Link } from "react-router-dom";

export default function LoginModal({ openModal }) {
  if (!openModal) return null;
  return (
    <div>
      <div className="modal modal-open rounded-3xl pt-15 pb-10 md:px-25 px-5 border border-[#22222233] flex justify-center items-center ">
        <div className=" bg-[#FFFFFF] modal-box flex flex-col justify-center items-center gap-10">
          <h3 className="font-bold xl:text-[24px] lg:text-[20px] text-[18px] text-[#222222]">
            Your should log in first!
          </h3>

          <div className="w-full text-center modal-action flex flex-col justify-center items-center gap-4">
            <Link
              to={"/login"}
              className=" w-full rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 bg-[#D9176C]"
            >
              Log in
            </Link>
            <Link
              to={"/signup"}
              className=" w-full text-center rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 text-[#D9176C] border border-[#D9176C] bg-[#FFFFFF]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
