import { Link } from "react-router-dom";

export default function AddCode() {
  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col justify-center items-center gap-10 pt-16 pb-146">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold text-[16px] text-[#D9176C]">
          Reset your password!
        </h1>
        <h1 className="font-normal text-[14px] text-[#22222280]">
          Enter the 4 dights code that you received on your email
        </h1>
      </div>
      <div className="xl:w-78 lg:w-70 md:w-[60%] w-[80%] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-6">
            
        </div>
        <Link
          to={""}
          className="cursor-pointer w-full py-3 px-4 bg-[#D9176C] rounded-lg font-semibold text-[18px] flex justify-center items-center"
        >
          Reset password
        </Link>
      </div>
    </div>
  );
}
