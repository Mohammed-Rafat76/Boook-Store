
import BooksSlides from "../HomeComponent/booksSlides";


export default function BestSellerSection() {
  return (
    <div>
      <div className="w-full bg-[#3B2F4A] py-30 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center px-5 xl:px-115.5 text-center gap-2">
          <h1 className="font-bold text-[26px]">Best Seller</h1>
          <p className="text-[16px] xl:px-11 font-normal text-[#FFFFFF80]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-full">
          <BooksSlides />
        </div>
        <button className="py-3 px-4 rounded-lg bg-[#D9176C] text-[18px] font-semibold tetx-[#FFFFFF] w-45">Shop now</button>
      </div>
    </div>
  );
}
