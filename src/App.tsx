import { Route, Routes } from "react-router-dom";
import "./index.css";
import RootLayout from "./components/layout/RootLayout";
import AddCashier from "./components/pages/AddCashier";
import CityAdminPanel from "./components/pages/admin-panel/city/CityAdminPanel";
import CashierAdminPanel from "./components/pages/admin-panel/cashier/CashierAdminPanel";
import PayTicketInfo from "./components/pages/pay/PayTicketInfo";
import SuccessfulPay from "./components/pages/pay/SuccessfulPay";
import SignIn from "./components/pages/auth/SignIn";

import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import Prefetch from "./features/auth/Prefetch";
import CashierPanel from "./components/pages/cashier-panel/CashierPanel";
import RoleRedirect from "./features/auth/RoleRedirect";
import PrepaymentForm from "./components/pages/pay/PrepaymentForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<RoleRedirect />} />
                <Route
                  element={<RequireAuth allowedRoles={[ROLES.Employee]} />}
                >
                  <Route path="/cashier" element={<CashierPanel />}></Route>
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="/add-cashier" element={<AddCashier />} />
                  <Route path="/admin-panel">
                    <Route path="cashier">
                      <Route path=":id" element={<CashierAdminPanel />} />
                    </Route>
                    <Route path="city" element={<CityAdminPanel />} />
                  </Route>
                  <Route path="/pay">
                    <Route path="" element={<PayTicketInfo />} />
                    <Route path="prepayment" element={<PrepaymentForm />} />
                    <Route path="successful" element={<SuccessfulPay />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Routes>
    </>
  );
}

export default App;
