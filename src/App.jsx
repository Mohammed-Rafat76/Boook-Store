import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SignupPage from "./Pages/signupPage";
import HomePage from "./Pages/homePage";
import MainLayOut from "./mainLayOut";
import BooksPage from "./Pages/booksPage";
import AboutUsPage from "./Pages/aboutUsPage";
import ForgetpasswordPage from "./Pages/ForgetpasswordPage";
import AddCode from "./Pages/addCode";
import ResetPassword from "./Pages/ResetPassword";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/forgetpassword" element={<ForgetpasswordPage />} />
            <Route path="/addCode" element={<AddCode />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
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