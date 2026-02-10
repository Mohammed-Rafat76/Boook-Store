import { useEffect, useState } from "react";
import BooksSlides from "./booksSlides";
import axios from "axios";
import { domain } from "../store";

export default function BestSellerSection() {
  const [books, setBooks] = useState([]);
  const endPoint = "/book";
  useEffect(() => {
    axios
      .get(domain + endPoint)
      .then((res) => {
        setBooks(res.data.data.books)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="w-full bg-[#3B2F4A] py-30 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center px-115.5 text-center gap-2">
          <h1 className="font-bold text-[26px]">Best Seller</h1>
          <p className="text-[16px] px-11 font-normal text-[#FFFFFF80]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="w-full">
          <BooksSlides books={books} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
