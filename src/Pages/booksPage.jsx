import Filter from "../Component/BooksComponent/Filter";
import RightBooksComponenet from "../Component/BooksComponent/RightBooksComponenet";

export default function BooksPage() {
  return (
    <div className="bg-[#F5F5F5] flex justify-between items-start">
      <Filter />
      <RightBooksComponenet />
    </div>
  );
}
