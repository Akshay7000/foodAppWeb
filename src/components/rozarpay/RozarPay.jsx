import swal from "sweetalert";
import { clearItem } from "../../redux/CartReducer/action";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (
  amount,
  form,
  navigate,
  profileImg,
  dispatch
) => {
  const { firstName, lastName, email, mobile } = form;

  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const options = {
    key: "rzp_test_GZ5gpKSKDoFi4K",
    amount: amount * 100,
    currency: "INR",
    name: "AVYAYA HEALTH",
    description: "Thank You for Purchase",
    image:
      "https://avyayahealth.vercel.app/static/media/icon.eb742b90a8c5f86074fe.png",

    handler: function (response) {
      swal({
        title: "Payment Success!",
        text: "Click Yes to know your Payment ID",
        icon: "success",
        buttons: ["No", "Yes"],
      }).then((willDelete) => {
        if (willDelete) {
          swal(`Your Payment Id is : ${response.razorpay_payment_id}`, {}).then(
            () => {
              dispatch(clearItem());
              navigate("/");
            }
          );
        } else {
          swal("Thank You for Shopping!").then(() => navigate("/"));
        }
      });
    },
    prefill: {
      name: `${firstName} ${lastName}`,
      email: email,
      contact: mobile,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
const ccAvanue = async (amount, form, cart, quantity) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    addressLine1,
    addressLine2,
    locality,
    state,
    pinCode,
    country,
  } = form;

  let headersList = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  var host =
    window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://cc-backend.vercel.app";
  var urlRedirect = `${host}/ccavResponseHandler`;

  var currentURl = window?.location?.hostname;

  let bodyContent = `merchant_id=2045995&order_id=${randomString()}&currency=INR&amount=${amount}&redirect_url=${urlRedirect}&cancel_url=${urlRedirect}&language=EN&billing_name=${firstName} ${lastName}&billing_address=${addressLine1} ${addressLine2}&billing_city=${locality}&billing_state=${state}&billing_zip=${pinCode}&billing_country=${country}&billing_tel=${mobile}&billing_email=${email}&delivery_name=${firstName} ${lastName}&delivery_address=${addressLine1} ${addressLine2}&delivery_city=${locality}&delivery_state=${state}&delivery_zip=${pinCode}&delivery_country=${country}&delivery_tel=${mobile}&merchant_param1=${quantity}&merchant_param2=${currentURl}`;
  // let bodyContent = {
  //   merchant_id: "2045995",
  //   order_id: randomString(),
  //   currency: "INR",
  //   amount: amount,
  //   redirect_url: urlRedirect,
  //   cancel_url: urlRedirect,
  //   language: "EN",
  //   billing_name: firstName + " " + lastName,
  //   billing_address: addressLine1 + " " + addressLine2,
  //   billing_city: locality,
  //   billing_state: state,
  //   billing_zip: pinCode,
  //   billing_country: country,
  //   billing_tel: mobile,
  //   billing_email: email,
  //   delivery_name: firstName + " " + lastName,
  //   delivery_address: addressLine1 + " " + addressLine2,
  //   delivery_city: locality,
  //   delivery_state: state,
  //   delivery_zip: pinCode,
  //   delivery_country: country,
  //   delivery_tel: mobile,
  //   merchant_param1: quantity,
  //   merchant_param2: currentURl,
  // };

  let response = await fetch(`${host}/ccavRequestHandler`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log("🚀 ~ file: RozarPay.jsx:131 ~ ccAvanue ~ data:", data);

  return data;
};
function getJsonData(query) {
  let arrayOfKeyValues = query.split(",");
  let modifiedArray = new Array();

  for (let i = 0; i < arrayOfKeyValues.length; i++) {
    let arrayValues = arrayOfKeyValues[i].split(":");
    let arrayString =
      '"' + arrayValues[0] + '"' + ":" + '"' + arrayValues[1] + '"';
    modifiedArray.push(arrayString);
  }
  let jsonDataString = "{" + modifiedArray.toString() + "}";
  let jsonData = JSON.parse(jsonDataString);

  return jsonData;
}
function randomString(
  length = 12,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
export { displayRazorpay, ccAvanue, getJsonData };
