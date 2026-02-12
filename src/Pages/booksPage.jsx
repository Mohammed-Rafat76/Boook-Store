import Filter from "../Component/BooksComponent/Filter";
import RightBooksComponenet from "../Component/BooksComponent/RightBooksComponenet";

export default function BooksPage() {
  return (
    <div className="bg-[#F5F5F5] grid grid-cols-1 lg:grid-cols-12 ">
      <div className="col-span-4 border-r border-[#2222221A]">
        <Filter />
      </div>
      <div className="col-span-8">
        <RightBooksComponenet />
      </div>
    </div>
  );
}
