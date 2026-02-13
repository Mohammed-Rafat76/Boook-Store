import CheckOutButton from "./CheckOutButton";


export default function TheButtons() {
  return (
    <div className="w-full justify-center items-center gap-4 xl:px-105 lg:px-75 md:px-50 px-5 ">
        <CheckOutButton price={40}/>
    </div>
  )
}
