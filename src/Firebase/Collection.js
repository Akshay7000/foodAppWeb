import { firestore } from "./config";

const Products = firestore.collection("products");
const Featured = firestore.collection("featuredProducts");
const WebSettings = firestore.collection("webSetting");
const customers = firestore.collection("customers");
const subscribeProducts = firestore.collection("subscribeProduct");
const orders = firestore.collection("orders");
const Attendance = firestore.collection("Attendance");

export {
  Products,
  Featured,
  WebSettings,
  customers,
  subscribeProducts,
  orders,
  Attendance,
};
