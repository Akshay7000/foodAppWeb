import { customers } from "../../Firebase/Collection";
import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

const getCart = (params) => (dispatch) => {
  dispatch({ type: types.GET_CART_R });

  return customers
    .doc(params)
    .collection("cart")
    .get()
    .then((res) => {
      var allproducts = [];
      res.docs?.map((products) => {
        allproducts.push({ ...products.data() });
      });

      dispatch({ type: types.GET_CART_S, payload: allproducts });
      return allproducts;
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_F });
    });
};
const incQty = (params) => (dispatch) => {
  dispatch({ type: types.GET_CART_R });

  var qty = params.qty === NaN ? 0 : params.qty;
  return customers
    .doc(params.uid)
    .collection("cart")
    .doc(params.id)
    .update({ qty: qty + 1 })
    .then((res) => {
      dispatch({ type: types.IN_QTY, payload: { id: params.id, qty } });
    });
};
const decQty = (params) => (dispatch) => {
  dispatch({ type: types.GET_CART_R });
  console.log("params", params);
  var qty = params.qty === NaN ? 0 : params.qty;
  return customers
    .doc(params.uid)
    .collection("cart")
    .doc(params.id)
    .update({ qty: qty - 1 })
    .then((res) => {
      dispatch({ type: types.DEC_QTY, payload: { id: params.id, qty } });
    });
};

// const decQty = (payload) => ({
//   type: types.DEC_QTY,
//   payload,
// });
const removeItem = (params) => (dispatch) => {
  // dispatch({ type: types.GET_CART_R });
  console.log("params", params);

  return customers
    .doc(params.uid)
    .collection("cart")
    .doc(params.id)
    .delete()
    .then((res) => {
      dispatch({ type: types.REMOVE_QTY, payload: params });
    });
};
// const removeItem = (payload) => ({
//   type: types.REMOVE_QTY,
//   payload,
// });

const clearItem = (payload) => ({
  type: types.CLEAR_QTY,
  payload,
});

const addToCart = (payload) => async (dispatch) => {
  console.log("payload", payload);
  // var itemRecived = dispatch({
  //   type: types.ADD_TO_CART,
  //   payload: payload,
  // });

  // return [itemRecived];
  customers
    .doc(payload.uid)
    .collection("cart")
    .doc(payload.currentProducts.id)
    .get()
    .then((res) => {
      if (res.data()) {
        console.log("resp", res.data());
        customers
          .doc(payload.uid)
          .collection("cart")
          .doc(payload.currentProducts.id)
          .update({ qty: res.data().qty + 1 });
        // dispatch({
        //   type: types.ADD_TO_CART,
        //   payload: payload.currentProducts,
        // });
      } else {
        customers
          .doc(payload.uid)
          .collection("cart")
          .doc(payload.currentProducts.id)
          .set({ ...payload.currentProducts, qty: 1 });
      }
      dispatch({
        type: types.ADD_TO_CART,
        payload: payload,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export { addToCart, incQty, decQty, removeItem, clearItem, getCart };

// expression assignment erro so check the bracket have use right brackets
