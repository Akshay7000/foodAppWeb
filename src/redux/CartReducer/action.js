import { users } from "../../Firebase/Collection";
import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

// const addToCart = (payload) => ({
//   type: types.ADD_TO_CART,
//   payload,
// });

const incQty = (payload) => ({
  type: types.IN_QTY,
  payload,
});
const decQty = (payload) => ({
  type: types.DEC_QTY,
  payload,
});

const removeItem = (payload) => ({
  type: types.REMOVE_QTY,
  payload,
});

const clearItem = (payload) => ({
  type: types.CLEAR_QTY,
  payload,
});

const addToCart = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, payload });
  var userData = getLocalData("token");
  return await users.doc(userData.uid).collection("cart").add(payload);
};

export { addToCart, incQty, decQty, removeItem, clearItem };

// expression assignment erro so check the bracket have use right brackets
