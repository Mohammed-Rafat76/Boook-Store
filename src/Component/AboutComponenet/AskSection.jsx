import img from "../../../public/d14d7655b7dfc0cacd1072cd70a68c579726248e.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

export default function AskSection() {
  return (
    <div
      className={`bg-[url(${img})] pt-30 pb-29 xl:px-50 lg:px-25 md:px-12.5 px-6.25 flex flex-col lg:flex-row justify-center gap-48 bg-[#3B2F4A] items-start`}
    >
      <div className="flex flex-col justify-center items-center gap-15">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px]  text-[#FFFFFF]">
            Have a Questions? <br /> Get in Touch
          </h1>
          <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#FFFFFF80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="w-full flex flex-col justify-center items-start">
            <div className="w-full flex justify-start items-start gap-6">
              <div className="w-full">
                <label className="input bg-transparent validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                  />
                </label>
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </div>
              <div className="w-full">
                <label className="input bg-transparent validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="Email Address" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="input bg-transparent w-full h-38"
                placeholder="Your Message"
              />
            </div>
          </div>
          <button className="py-3 px-4 bg-[#D9176C] text-[#FFFFFF] w-50 rounded-lg ">Send Message</button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex justify-center items-center gap-3">
                <div className="w-12 h-12 bg-[#FFFFFF] border border-[#FFFFFF33] rounded-lg p-3 flex justify-center items-center"><MdOutlinePhoneInTalk className="w-5 h-5 text-[#D9176C]" /></div>
                <h1 className="font-normal text-[16px] text-[#FFFFFF]">01123456789</h1>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="w-12 h-12 bg-[#FFFFFF] border border-[#FFFFFF33] rounded-lg p-3 flex justify-center items-center"><CiMail className="w-5 h-5 text-[#D9176C]" /></div>
                <h1 className="font-normal text-[16px] text-[#FFFFFF]">Example@gmail.com</h1>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="w-12 h-12 bg-[#FFFFFF] border border-[#FFFFFF33] rounded-lg p-3 flex justify-center items-center"><FaLocationDot className="w-5 h-5 text-[#D9176C]" /></div>
                <h1 className="font-normal text-[16px] text-[#FFFFFF]">adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</h1>
            </div>
      </div>
    </div>
  );
}
