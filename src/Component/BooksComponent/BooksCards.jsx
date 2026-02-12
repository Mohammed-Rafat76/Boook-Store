import SinglBookCard from "./SinglBookCard";


export default function BooksCards() {
  return (
    <div className="flex flex-col justify-center items-center gap-15">
        <SinglBookCard/>
        <SinglBookCard/>
        <SinglBookCard/>
    </div>
  )
}
