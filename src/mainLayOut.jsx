import Header from "./Component/header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/footer";

export default function MainLayOut() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
