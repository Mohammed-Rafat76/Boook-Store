import userImg from "../assets/7098886df02b2521176bde95e31347ff1428d87f.jpg";

import axios from "axios";
import { domain } from "../store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiSolidShow } from "react-icons/bi";
import { Link, Links, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useOutletContext } from "react-router-dom";
export default function Profile() {
  const { login } = useOutletContext();
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    if (values.password_confirmation !== values.password) {
      alert("wrong password");
    } else {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      };
    }
  };
  const registerSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])(?=\S+$).{8,}$/,
        "At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special, no spaces",
      ),
    password_confirmation: Yup.string().required(),
  });
  return (
    <div className="w-full bg-[#F5F5F5] py-40 px-2.5">
      <div className="w-full flex flex-col justify-center items-center gap-20 ">
        <img src={userImg} className="rounded-[100px] w-45 h-45" alt="" />
        <div className="bg-[#FFFFFF] h-full flex flex-col justify-center items-center gap-10 border border-[#22222233] rounded-3xl md:p-10 py-10 ">
          <h1 className="font-semibold text-[20px] text-[#222222]">
            General information
          </h1>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            <Form className="xl:w-xl lg:w-lg md:w-md w-[80%] flex flex-col justify-center items-center gap-6">
              <div className="w-full flex  gap-4">
                <div className="w-full flex flex-col justify-center items-start gap-2.5 ">
                  <label
                    htmlFor="text"
                    className="font-normal text-[14px] text-[#22222280]"
                  >
                    First Name
                  </label>
                  <Field
                    name="first_name"
                    type="text"
                    id="text"
                    placeholder="John"
                    className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
                  />
                  <ErrorMessage
                    name="first_name"
                    component={"p"}
                    className="text-red-500 font-medium py-2"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start ">
                  <label
                    htmlFor="text"
                    className="font-normal text-[14px] text-[#22222280]"
                  >
                    Last Name
                  </label>
                  <Field
                    name="last_name"
                    type="text"
                    id="text"
                    placeholder="Smith"
                    className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
                  />
                  <ErrorMessage
                    name="last_name"
                    component={"p"}
                    className="text-red-500 font-medium py-2"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start ">
                <label
                  htmlFor="email"
                  className="font-normal text-[14px] text-[#22222280]"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
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
                  className="font-normal text-[14px] text-[#22222280]"
                >
                  Phone number
                </label>
                <Field
                  name="number"
                  type="number"
                  id="number"
                  placeholder="123456789"
                  className=" text-violet-500 w-full  rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
                />
                
                <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-12.5 bottom-5" />
              </div>
              <div className="relative w-full flex flex-col justify-center items-start ">
                <label
                  htmlFor="text"
                  className="font-normal text-[14px] text-[#22222280]"
                >
                  Address
                </label>
                <Field
                  name="Address"
                  type="text"
                  id="Address"
                  placeholder="Maadi, Cairo, Egypt."
                  className="text-violet-500 w-full  rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#22222280] placeholder:text-[16px] placeholder:font-normal "
                />
                <BiSolidShow className="cursor-pointer text-[#22222280] absolute w-3.5 h-3.5 right-5 top-12.5 bottom-5" />
              </div>

              <Link
                to={"/"}
                type="submit"
                onSubmit={(values) => {
                  handleRegister(values);
                }}
                className=" text-center rounded-lg py-3 px-4 bg-[#D9176C] text-[#FFFFFF] font-semibold text-[18px] w-full "
              >
                Update information
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
