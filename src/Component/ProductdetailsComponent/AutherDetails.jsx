import React from 'react'

export default function AutherDetails() {
  return (
    <div>
        <div className="xl:w-165 flex flex-col xl:flex-row justify-between items-start  gap-6">
                  <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                      Author
                    </h1>
                    <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                      Robert T. Kiyosaki
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                      Publication Year
                    </h1>
                    <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                      1997
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                      Book
                    </h1>
                    <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                      1 Of 1
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                      Pages
                    </h1>
                    <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                      336
                    </h1>
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <h1 className=" w-full text-end lg:text-center text-[14px] font-normal text-[#22222280]">
                      Language
                    </h1>
                    <h1 className="w-full text-end lg:text-center text-[14px] font-semibold text-[#222222]">
                      English
                    </h1>
                  </div>
                </div>
    </div>
  )
}
