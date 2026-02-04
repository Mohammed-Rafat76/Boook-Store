import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/loginPage";

import SignupPage from "./Pages/signupPage";
import HomePage from "./Pages/homePage";
import MainLayOut from "./mainLayOut";
import BooksPage from "./Pages/booksPage";
import AboutUsPage from "./Pages/aboutUsPage";
import ForgetpasswordPage from "./Pages/ForgetpasswordPage";
import AddCode from "./Pages/addCode";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/forgetpassword" element={<ForgetpasswordPage />} />
            <Route path="/addCode" element={<AddCode />} />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="text-7xl font-extrabold text-red-400">
                404 error
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
