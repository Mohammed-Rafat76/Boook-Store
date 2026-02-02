import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function ForgetpasswordPage() {
  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col justify-center items-center gap-10 pt-16 pb-146">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-semibold text-[16px] text-[#D9176C]">
          Forget Password?
        </h1>
        <h1 className="font-normal text-[14px] text-[#22222280]">
          Enter your email to reset your password
        </h1>
      </div>
      <Formik>
        <Form className="xl:w-xl lg:w-lg md:w-md w-[80%] flex flex-col justify-center items-center gap-10">
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <label
              htmlFor="email"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <ErrorMessage
              name="email"
              component={"p"}
              className="text-red-500 font-medium py-2"
            />
          </div>
          <Link to={"/addCode"} className="cursor-pointer w-full py-3 px-4 bg-[#D9176C] rounded-lg font-semibold text-[18px]">Send reset code</Link>
        </Form>
      </Formik>
    </div>
  );
}
