import { firestore } from "./config";

const users = firestore.collection("users");
const Products = firestore.collection("products");
const Featured = firestore.collection("featuredProducts");
export { users, Products, Featured };
