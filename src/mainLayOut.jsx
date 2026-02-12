import Header from "./Component/header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
