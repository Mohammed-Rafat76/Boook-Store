import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Social() {
  return (
    <div className=" flex justify-center items-center gap-6">
      <div className="w-full flex justify-center items-center gap-3">
        <FaFacebook className="w-6 h-6 text-blue-500" />
        <AiFillInstagram className="w-6 h-6 text-pink-600" />
        <FaXTwitter className="w-6 h-6 text-black" />
        <FaSquareWhatsapp className="w-6 h-6 text-green-500" />
      </div>
      <IoShareSocialOutline className="w-8 h-8 text-black" />
    </div>
  );
}
