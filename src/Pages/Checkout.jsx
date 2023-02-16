import { Box, Flex, useMediaQuery, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import CheckOutPage from "../components/checkout/CheckOutPage";
import { InputCoupon } from "../components/InputCoupon/InputCoupon";
import Navbar from "../components/Navbar/Navbar";
import {
  checkCharacter,
  checkEmail,
  checkFormEmpty,
  checkMobile,
  checkPinCode,
  setToast,
} from "../components/Other/CheckProperty";
import { displayRazorpay } from "../components/rozarpay/RozarPay";

const Checkout = () => {
  const cart = useSelector((store) => store.cart.cart);
  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  console.log(
    "🚀 ~ file: Checkout.jsx:22 ~ Checkout ~ profileData",
    profileData
  );

  const initialState = {
    firstName: profileData?.firstName,
    lastName: profileData?.lastName,
    addressLine1: profileData?.address?.addressLine1,
    addressLine2: profileData?.address?.addressLine2,
    locality: profileData?.address?.locality,
    pinCode: profileData?.address?.pinCode,
    state: profileData?.address?.state,
    country: "India",
    email: profileData?.email,
    mobile: profileData?.mobile,
  };
  const [dis, setDis] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const profileImg = profileData.description;
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFormValidation = (form) => {
    const isEmpty = checkFormEmpty(form);
    if (!isEmpty.status) {
      setToast(toast, isEmpty.message, "error");
      return isEmpty.status;
    }
    // const isFirstname = checkCharacter(form.firstName);
    // if (!isFirstname.status) {
    //   return setToast(toast, isFirstname.message, "error");
    // }
    // const isLastname = checkCharacter(form.lastName);
    // if (!isLastname.status) {
    //   return setToast(toast, isLastname.message, "error");
    // }
    const isEmail = checkEmail(form.email);
    if (!isEmail.status) {
      setToast(toast, isEmail.message, "error");
      return isEmail.status;
    }
    const isPinCode = checkPinCode(form.pinCode);
    if (!isPinCode.status) {
      setToast(toast, isPinCode.message, "error");
      return isPinCode.status;
    }
    const isMobile = checkMobile(form.mobile);
    if (!isMobile.status) {
      setToast(toast, isMobile.message, "error");
      return isMobile.status;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleFormValidation(form)) {
      return;
    } else {
      displayRazorpay(price, form, navigate, profileImg, dispatch);
    }
  };
  // =====================Login Down========================================================================
  const convertStringIntoNumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    let arr = str.includes(",") ? str.split(",") : [];
    let converting_string = arr.reduce((a, c) => a + c, "");
    let result = Number(converting_string);
    return result;
  };
  let price = 0;
  let discount_price = 0;
  let quantity = 0;
  cart.forEach((item) => {
    price += convertStringIntoNumber(item.price) * item.qty;
    // discount_price += convertStringIntoNumber(item.final_price) * item.qty;
    quantity += item.qty;
  });
  let discount = dis;
  let total_discount = Math.floor(discount_price - dis);

  // ===========================Login UP===============================================================
  return (
    <div>
      <Navbar /> <br />
      <Flex
        m={isLargerThan ? "3rem" : "1rem"}
        mt="5rem"
        flexDirection={isLargerThan ? "row" : "column-reverse"}
        w="90%"
      >
        <CheckoutForm
          isLargerThan={isLargerThan}
          onChange={handleOnChange}
          FormSubmit={handleSubmit}
          total_discount={total_discount}
          value={form}
        />
        {/* ---------------------------------place order --------------------------------------------------- */}
        <Box width={["95%", "90%", "40%", "40%"]} m="auto" min-h="100vh">
          <CheckOutPage
            title={"BACK TO CART"}
            cart={cart}
            show_price={price}
            discount_price={price}
            link={"/cart"}
            coupon={InputCoupon(discount_price, setDis)}
            total_discount={total_discount}
            discount={discount}
            quantity={quantity}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Checkout;
