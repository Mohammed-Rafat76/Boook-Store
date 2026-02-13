import { Link } from "react-router-dom";

export default function TitleAndPara() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-2">
      <Link
        to={"/productdetailsPage"}
        className="cursor-pointer text-[18px] w-full font-bold text-[#222222]"
      >
        Rich Dad And Poor Dad
      </Link>
      <p className="w-full  font-normal text-[16px] text-[#22222280]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
        ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
        leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
      </p>
    </div>
  );
}
