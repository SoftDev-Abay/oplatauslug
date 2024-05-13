import { Route, Routes } from "react-router-dom";
import "./index.css";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import AddCashier from "./components/pages/AddCashier";
import AdminPanel from "./components/pages/AdminPanel";
import PayForm from "./components/pages/pay/PayForm";
import SuccessfulPay from "./components/pages/pay/SuccessfulPay";
import SignIn from "./components/pages/auth/SignIn";

import "swiper/css"; // Core styles
import "swiper/css/pagination"; // Pagination module
import "swiper/css/navigation"; // Navigation module

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-cashier" element={<AddCashier />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/pay">
            <Route path="" element={<PayForm />} />
            <Route path="successful" element={<SuccessfulPay />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Route>
        <Route path="/auth">
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
