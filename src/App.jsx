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
import Profile from "./Pages/Profile";
import ProductdetailsPage from "./Pages/ProductdetailsPage";
import CustomerReviewsPage from "./Pages/CustomerReviewsPage";
import RecomendedForYouPage from "./Pages/RecomendedForYouPage";
import HomeAfterLogin from "./Pages/HomeAfterLogin";
import MyCartPage from "./Pages/myCartPage";
import WishlistPage from "./Pages/WishlistPage";
import CheckOutPage from "./Pages/CheckOutPage";
import HistoryPage from "./Pages/HistoryPage";
import HistoryInProgressPage from "./Pages/HistoryInProgressPage";
import HistoryCompletedPage from "./Pages/HistoryCompletedPage";
import CanceledPage from "./Pages/CanceledPage";
export default function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/forgetpassword" element={<ForgetpasswordPage />} />
            <Route path="/addCode" element={<AddCode />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/productdetailsPage" element={<ProductdetailsPage />} />
            <Route path="/customerReviewsPage" element={<CustomerReviewsPage />} />
            <Route path="/recomendedForYouPage" element={<RecomendedForYouPage />} />
            <Route path="/homeAfterLogin" element={<HomeAfterLogin />} />
            <Route path="/myCartPage" element={<MyCartPage />} />
            <Route path="/wishlistPage" element={<WishlistPage />} />
            <Route path="/checkOutPage" element={<CheckOutPage />} />
            <Route path="/historyPage" element={<HistoryPage />} />
            <Route path="/historyInProgressPage" element={<HistoryInProgressPage />} />
            <Route path="/historyCompletedPage" element={<HistoryCompletedPage />} />
            <Route path="/canceledPage" element={<CanceledPage />} />
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
