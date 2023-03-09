import { customers, orders } from "../../Firebase/Collection";
import * as types from "./actionType";

import { CLEAR_CART } from "../CartReducer/actionType";
import moment from "moment";
const CreateOrder = (payload) => async (dispatch) => {
  const { order, cart, uid } = payload;
  console.log("payload", order, cart, uid);
  dispatch({ type: types.CREATE_ORDER_R });
  orders
    .doc(order.order_id)
    .set({ ...order, item: cart, createdDate: moment().format(), userId: uid })
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

  orders
    .where("userId", "==", payload)
    .get()
    .then((res) => {
      var all = res?.docs?.map((item) => item.data());
      var sortedData = all?.sort(function (a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });

      dispatch({ type: types.GET_ORDER_S, payload: sortedData });
    })
    .catch((err) => {
      console.log("err------->", err);
      dispatch({ type: types.GET_ORDER_F });
    });
};
export { CreateOrder, getOrders };
