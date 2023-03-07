import { Box, Flex, useMediaQuery, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlertCustom from "../components/Alert/Alert";
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
import { ccAvanue, displayRazorpay } from "../components/rozarpay/RozarPay";
import { profileUpdate } from "../redux/AuthReducer/action";

const Checkout = () => {
  const cart = useSelector((store) => store.cart.cart);
  const profileData = useSelector((state) => state.AuthReducer?.profileData);

  const [AlerState, setAlerState] = useState(false);
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

  const [form, setForm] = useState(initialState);

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
      ccAvanue(price, form, cart, quantity)
        .then((res) => {
          var data = {
            address: {
              addressLine1: form.addressLine1,
              addressLine2: form.addressLine2,
              locality: form.locality,
              pinCode: form.pinCode,
              state: form.state,
            },
            mobile: form.mobile,
            firstName: form.firstName,
            lastName: form.lastName,
          };

          dispatch(profileUpdate(data));
          ProceedForOrder(res);
        })
        .catch((err) => console.log("error->>>>", err));
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

  const ProceedForOrder = (res) => {
    var loc =
      window.location.hostname === "localhost"
        ? "AVBE21KB97BJ46EBJB"
        : "AVIE16KB40AF84EIFA";

    var action_url =
      window.location.hostname === "localhost"
        ? "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
        : "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
    var f = document.createElement("form");
    f.action = action_url;

    f.method = "POST";
    f.redirect = "redirect";
    f.id = "nonseamless";

    var i = document.createElement("input");
    i.type = "hidden";
    i.id = "encRequest";
    i.name = "encRequest";
    i.value = res;
    var ac = document.createElement("input");
    ac.type = "hidden";
    ac.id = "access_code";
    ac.name = "access_code";
    ac.value = loc;
    f.appendChild(i);

    f.appendChild(ac);

    document.body.appendChild(f);
    f.submit();
  };

  return (
    <div>
      <Navbar /> <br />
      <Flex
        m={isLargerThan ? "3rem" : "1rem"}
        mt="5rem"
        flexDirection={isLargerThan ? "row" : "column-reverse"}
        w="90%"
      >
        <AlertCustom
          MainBtn="Proceed"
          OnClose={() => setAlerState(false)}
          onOK={() => {
            ProceedForOrder();
            setAlerState(false);
          }}
          showAlert={AlerState}
          Title={"Confirm Your Order!"}
          // Description={"Would you like to Procede with ?"}
        />
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
