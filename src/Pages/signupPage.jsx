import { Field, Form, Formik } from "formik";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="bg-amber-100 h-screen flex justify-center items-center">
      <Formik>
        <Form className="w-xl flex flex-col justify-center items-center gap-4">
          <div className="w-full flex  gap-4">
            <div className="w-full flex flex-col justify-center items-start ">
              <label
                htmlFor="text"
                className="font-semibold text-[18px] text-[#222222]"
              >
                First Name
              </label>
              <Field
                type="text"
                id="text"
                placeholder="John"
                className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start ">
              <label
                htmlFor="text"
                className="font-semibold text-[18px] text-[#222222]"
              >
                Last Name
              </label>
              <Field
                type="text"
                id="text"
                placeholder="Smith"
                className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start ">
            <label
              htmlFor="email"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
          </div>
          <div className="relative w-full flex flex-col justify-center items-start ">
            <label
              htmlFor="password"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              placeholder="Enter password"
              className=" text-violet-500 w-full  rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-12.5 bottom-5" />
          </div>
          <div className="relative w-full flex flex-col justify-center items-start ">
            <label
              htmlFor="text"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Confirm password
            </label>
            <Field
              type="text"
              id="text"
              placeholder="Enter password"
              className="text-violet-500 w-full  rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-12.5 bottom-5" />
          </div>
          <div className="w-full flex items-center justify-start gap-2 text-black">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary w-5 h-5"
            />
            <h1 className="font-normal text-[12px]   ">
              Agree with{" "}
              <span className="text-[#D9176C] cursor-pointer">
                Terms & Conditions
              </span>
            </h1>
          </div>
          <button className=" rounded-lg py-3 px-4 bg-[#D9176C] text-[#FFFFFF] font-semibold text-[18px] w-full ">
            Sign Up
          </button>
          <h1 className="font-normal text-[#222222] text-[16px] ">Already have an account? <Link to={"/"} className="font-semibold text-[16px] text-[#D9176C] ">Login</Link></h1>
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <button className="btn w-full bg-[#1A77F2] text-white border-[#005fd8]">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
            Login with Facebook
          </button>
        </Form>
      </Formik>
    </div>
  );
}
