import { firestore } from "./config";

const Products = firestore.collection("products");
const Featured = firestore.collection("featuredProducts");
const WebSettings = firestore.collection("webSetting");
const customers = firestore.collection("customers");
const subscribeProducts = firestore.collection("subscribeProduct");

export { Products, Featured, WebSettings, customers, subscribeProducts };
