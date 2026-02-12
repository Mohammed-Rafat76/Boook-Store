import Header from "./Component/header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Component/footer";
import { useState } from "react";
import LoginModal from "./Component/loginModal";

export default function MainLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col bg-white">
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      {<LoginModal openModal={isHome&&!isLoggedIn} />}
      <Outlet context={{ login }} />
      <Footer />
    </div>
  );
}
