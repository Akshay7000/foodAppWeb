import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";

import AdminPage from "../Admin/AdminPage";
import DescriptionPage from "../components/Description/DescriptionPage";
import AboutUs from "../Pages/AboutUs";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import ContectUs from "../Pages/ContectUs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyAccount from "../Pages/MyAccount";
import OrderHistory from "../Pages/OrderHistory";
import OurTeam from "../Pages/OurTeam";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Return from "../Pages/Return";
import Register from "../Pages/SignUp";
import SomethingNew from "../Pages/SomethingNew";
import Support from "../Pages/Support";
import TermsCondition from "../Pages/T&C";
import Authentication from "../PrivateRoute/Authentication";
import OrderSuccess from "../Pages/OrderSuccess";
import ResetPassword from "../Pages/ResetPassword";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/something-new" element={<SomethingNew />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContectUs />} />
        <Route path="/description/:type/:id" element={<DescriptionPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/return" element={<Return />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/myaccount"
          element={
            <Authentication>
              <MyAccount />
            </Authentication>
          }
        />

        <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
        <Route
          path="/cart"
          element={
            <Authentication>
              <Cart />
            </Authentication>
          }
        />
        <Route
          path="/orderSuccess"
          element={
            <Authentication>
              <OrderSuccess />
            </Authentication>
          }
        />
        <Route
          path="/orders"
          element={
            <Authentication>
              <OrderHistory />
            </Authentication>
          }
        />
        <Route
          path="/admin"
          element={
            <Authentication>
              <AdminPage />
            </Authentication>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
