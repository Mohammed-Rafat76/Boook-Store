import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col justify-center items-center gap-10 pt-16 pb-146">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold text-[16px] text-[#D9176C]">
          Create new password!
        </h1>
        <h1 className="text-center font-normal text-[14px] text-[#22222280]">
          Create a strong password <br /> Your new password must be different
          from previous one
        </h1>
      </div>
      <Formik>
        <Form className="xl:w-xl lg:w-lg md:w-md w-[80%] flex flex-col justify-center items-center gap-10">
          <div className="relative w-full flex flex-col justify-center items-start gap-4">
            <label
              htmlFor="Password"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Password
            </label>
            <Field
              name="Password"
              type="Password"
              id="Password"
              placeholder="Enter password"
              className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <ErrorMessage
              name="Password"
              component={"p"}
              className="text-red-500 font-medium py-2"
            />
            <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-16.5 bottom-5" />
            <label
              htmlFor="password"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Confirm password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="example@gmail.com"
              className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className="text-red-500 font-medium py-2"
            />
            <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-46 bottom-5" />
            <div className="w-full flex items-center justify-start gap-2 text-black">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-secondary w-5 h-5"
              />
              <h1 className="font-normal text-[12px]   ">
                Remember me
              </h1>
            </div>
          </div>
          <Link
            to={"/login"}
            className="cursor-pointer w-full py-3 px-4 bg-[#D9176C] rounded-lg font-semibold text-[18px] flex justify-center items-center"
          >
            Send reset code
          </Link>
        </Form>
      </Formik>
    </div>
  );
}
