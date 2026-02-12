import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      {open && (
        <div className="modal modal-open rounded-3xl pt-15 pb-10 px-25 border border-[#22222233] flex justify-center items-center ">
          <div className=" bg-[#FFFFFF] modal-box flex flex-col justify-center items-center gap-10">
            <h3 className="font-bold text-[24px] text-[#222222]">
              Your should log in first!
            </h3>

            <div className="w-full text-center modal-action flex flex-col justify-center items-center gap-4">
              <Link
                to={"/login"}
                className=" w-full rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 bg-[#D9176C]"
                onClick={()=>setOpen(false)}
              >
                Log in
              </Link>
              <Link
                to={"/signup"}
                className=" w-full text-center rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 text-[#D9176C] border border-[#D9176C] bg-[#FFFFFF]"
                 onClick={()=>setOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
