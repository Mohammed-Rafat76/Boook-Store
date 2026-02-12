import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../store";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post(`${domain}/login`, data);
      navigate("/");
      toast.success('welcome')
      console.log(res);
    } catch (error) {
      toast.error("Wrong email or password")
      console.log(error);
    }
  };
  const loginSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])(?=\S+$).{8,}$/,
        "At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special, no spaces",
      ),
  });
  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col justify-center items-center gap-15 py-15">

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form className="xl:w-xl lg:w-lg md:w-md w-[80%] flex flex-col justify-center items-center gap-4">
          <h1 className="text-[16px] font-semibold text-[#D9176C] ">Welcome Back!</h1>
          <div className="w-full flex flex-col justify-center items-start ">
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
          <div className="relative w-full flex flex-col justify-center items-start ">
            <label
              htmlFor="password"
              className="font-semibold text-[18px] text-[#222222]"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              className=" text-violet-500 w-full  rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className="text-red-500 font-medium py-2"
            />
            <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-12.5 bottom-5" />
          </div>

          <div className="w-full flex items-center justify-start gap-2 text-black">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary w-5 h-5"
            />
            <div className="flex w-full justify-between items-center">
              <h1 className="font-normal text-[14px] text-[#222222] ">
                Remember me
              </h1>
              <Link to={"/forgetpassword"} className="font-normal text-[16px] text-[#D9176C] cursor-pointer">
                Forget password?
              </Link>
            </div>
          </div>
          <button
            onSubmit={(values) => {
              handleLogin(values);
            }}
            className=" rounded-lg py-3 px-4 bg-[#D9176C] text-[#FFFFFF] font-semibold text-[18px] w-full "
          >
            Log in
          </button>
          <h1 className="font-normal text-[#222222] text-[16px] ">
            Don’t have an account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold text-[16px] text-[#D9176C] "
            >
              Signup
            </Link>
          </h1>
          <h1 className="font-normal text-[14px] text-[#00000080]">or</h1>
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
