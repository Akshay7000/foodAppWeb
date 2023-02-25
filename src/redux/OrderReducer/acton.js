import { customers, orders } from "../../Firebase/Collection";
import * as types from "./actionType";

import { CLEAR_CART } from "../CartReducer/actionType";
import moment from "moment";
const CreateOrder = (payload) => async (dispatch) => {
  const { order, cart, uid } = payload;
  console.log("payload", order, cart, uid);
  dispatch({ type: types.CREATE_ORDER_R });

  customers
    .doc(uid)
    .collection("orders")
    .doc(order.order_id)
    .set({ ...order, item: cart, createdDate: moment().format() })
    .then((res) => {
      dispatch({
        type: types.CREATE_ORDER_S,
        payload: { ...order, item: cart },
      });
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_ORDER_F });
    });
};
const getOrders = (payload) => async (dispatch) => {
  dispatch({ type: types.GET_ORDER_R });

  customers
    .doc(payload)
    .collection("orders")
    .get()
    .then((res) => {
      var all = res?.docs?.map((item) => item.data());
      var sortedData = all.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdDate) - new Date(a.createdDate);
      });

      console.log("🚀 ~ file: acton.js:35 ~ .then ~ all:", all);
      dispatch({ type: types.GET_ORDER_S, payload: sortedData });
    })
    .catch((err) => {
      console.log("err------->", err);
      dispatch({ type: types.GET_ORDER_F });
    });
};
export { CreateOrder, getOrders };
