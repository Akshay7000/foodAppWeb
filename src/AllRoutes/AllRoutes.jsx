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
import Authentication from "../PrivateRoute/Authentication";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProducts />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContectUs />} />
        <Route path="/description/:id" element={<DescriptionPage />} />

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
