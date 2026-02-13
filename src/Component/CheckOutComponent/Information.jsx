import { ErrorMessage, Field, Form, Formik } from "formik";


export default function Information() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Formik>
        <Form className="xl:w-xl lg:w-lg md:w-md w-[80%] flex flex-col justify-center items-center gap-4">
          <div className="w-full flex  gap-4">
            <div className="w-full flex flex-col justify-center items-start ">
              <label
                htmlFor="text"
                className="font-normal text-[14px] text-[#22222280]"
              >
                Name
              </label>
              <Field
                name="first_name"
                type="text"
                id="text"
                placeholder="John Smith"
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
                Phone
              </label>
              <Field
                name="last_name"
                type="text"
                id="text"
                placeholder="123456789"
                className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
              />
              <ErrorMessage
                name="last_name"
                component={"p"}
                className="text-red-500 font-medium py-2"
              />
            </div>
          </div>
          <div className="w-full flex  gap-4">
            <div className="w-full flex flex-col justify-center items-start ">
              <label
                htmlFor="text"
                className="font-normal text-[14px] text-[#22222280]"
              >
                Email
              </label>
              <Field
                name="first_name"
                type="text"
                id="text"
                placeholder="JJohnsmith@gmail.comn"
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
                City
              </label>
              <Field
                name="last_name"
                type="text"
                id="text"
                placeholder="SMaadih"
                className="text-violet-500 w-full rounded-lg border p-4 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
              />
              <ErrorMessage
                name="last_name"
                component={"p"}
                className="text-red-500 font-medium py-2"
              />
            </div>
          </div>
          <div className="w-full flex  gap-4">
            <div className="w-full flex flex-col justify-center items-start ">
              <label
                htmlFor="text"
                className="font-normal text-[14px] text-[#22222280]"
              >
                State
              </label>
              <Field
                name="first_name"
                type="text"
                id="text"
                placeholder="Cairo"
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
                Zip
              </label>
              <Field
                name="last_name"
                type="text"
                id="text"
                placeholder="11311"
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
              Address
            </label>
            <Field
              name="Address"
              type="Address"
              id="Address"
              placeholder="Maadi, Cairo, Egypt."
              className="text-violet-500 w-full rounded-lg border p-4 gap-2 bg-[#FFFFFF] border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal "
            />
            <ErrorMessage
              name="Address"
              component={"p"}
              className="text-red-500 font-medium py-2"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
