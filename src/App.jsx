import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/loginPage";

import SignupPage from "./Pages/signupPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
