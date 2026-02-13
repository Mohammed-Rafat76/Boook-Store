import AutherDetails from "./AutherDetails";
import Social from "./Social";
import TitleAndPara from "./TitleAndPara";

export default function TextCollectionOfProductDetals() {
  return (
    <div className="w-full flex p-5 xl:p-0 flex-col gap-8 justify-between items-start">
      <div className="w-full flex p-5 xl:p-0 flex-col xl:flex-row gap-8 justify-between items-start">
        <TitleAndPara />
        <Social />
      </div>
      <AutherDetails />
    </div>
  );
}
