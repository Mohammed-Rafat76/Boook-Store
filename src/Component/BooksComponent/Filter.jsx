import { VscFilter } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Filter() {
  return (
    <div className="w-full border-r border-[#2222221A] pl-15 pt-15 pr-4">
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full flex justify-start items-center gap-4">
          <VscFilter className="w-6 h-6 text-black" />
          <h1 className="font-semibold text-[24px] text-[#222222]">Filter</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-white">
            <div className="w-full flex justify-between items-center ">
              <h1 className="text-[18px] font-semibold text-[#D9176C80]">
                Categories
              </h1>
              <MdKeyboardArrowDown className="w-6 h-6 text-[#D9176C80]" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5">
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    All Categories
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">1490</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    Business
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">90</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                   Kids
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">490</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                   Art
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">102</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    All Categories
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">1490</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                   History
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">190</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    Romance
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">89</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    Fantasy
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">47</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    Self Help
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">74</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                   Cooking
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">774</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-[14px] font-normal text-[#222222]">
                    Sports
                  </span>
                </label>
                <h1 className="text-[14px] font-normal text-[#22222280] ">94</h1>
              </div>
            </div>
            <h1 className="font-semibold text-[14px] text-[#D9176C]">Load More</h1>
          </div>
          <div className="w-full flex justify-between items-center rounded-lg bg-white p-4">
            <h1 className="text-[18px] font-semibold text-[#222222]">
                Publisher
              </h1>
              <MdOutlineKeyboardArrowRight className="w-6 h-6 text-[#222222]" />
          </div>
          <div className="w-full flex justify-between items-center rounded-lg bg-white p-4">
            <h1 className="text-[18px] font-semibold text-[#222222]">
                Year
              </h1>
              <MdOutlineKeyboardArrowRight className="w-6 h-6 text-[#222222]" />
          </div>
        </div>
      </div>
    </div>
  );
}
