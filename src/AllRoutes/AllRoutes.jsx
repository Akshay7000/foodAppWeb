import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";

import AdminPage from "../Admin/AdminPage";
import DescriptionPage from "../components/Description/DescriptionPage";
import AboutUs from "../Pages/AboutUs";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import ContectUs from "../Pages/ContectUs";
import Login from "../Pages/Login";
import MyAccount from "../Pages/MyAccount";
import OurTeam from "../Pages/OurTeam";
import Register from "../Pages/SignUp";
import Support from "../Pages/Support";
import Authentication from "../PrivateRoute/Authentication";
import SomethingNew from "../Pages/SomethingNew";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/something-new" element={<SomethingNew />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContectUs />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/support" element={<Support />} />
        {/* <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
