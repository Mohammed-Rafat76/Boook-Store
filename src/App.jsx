import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/loginPage";

import SignupPage from "./Pages/signupPage";
import HomePage from "./Pages/homePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
