
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
export default function ProductDetailsUpperImg() {
  return (
    <div>
        <img
          src={bookImg}
          className="object-cover xl:w-78 xl:h-full   w-50 h-80"
          alt=""
        />
    </div>
  )
}
