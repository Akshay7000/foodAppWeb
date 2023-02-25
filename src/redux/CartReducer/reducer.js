import { customers } from "../../Firebase/Collection";
import * as data from "./actionType";

const init = {
  cart: [],
  isLoading: false,
  isError: false,
};
const cartReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case data.ADD_TO_CART: {
      const isPresent = state?.cart?.find((item) => {
        return (
          item.id === payload.currentProducts.id &&
          item.qty === payload.currentProducts.qty
        );
      });
      let newCart;
      if (isPresent) {
        newCart = state.cart.map(async (item) => {
          if (
            item.id === payload.currentProducts.id &&
            item.qty === payload.currentProducts.qty
          ) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        let newPayload = {
          ...payload.currentProducts,
          qty: 1,
        };
        newCart = [...state?.cart, newPayload];
      }
      return { ...state, cart: newCart };
    }

    case data.IN_QTY: {
      let newChangeCart = state.cart.map((item) => {
        if (item.id === payload.id && item.qty === payload.qty) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: newChangeCart,
        isLoading: false,
        isError: false,
      };
    }

    case data.DEC_QTY: {
      let newChangeCart = state.cart.map((item) => {
        if (item.id === payload.id && item.qty === payload.qty) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: newChangeCart,
        isLoading: false,
        isError: false,
      };
    }

    case data.REMOVE_QTY: {
      let blankTheCart = state.cart.filter((item) => {
        return !(item.qty === payload.qty && item.id === payload.id);
      });
      return { ...state, cart: blankTheCart, isLoading: false, isError: false };
    }
    case data.CLEAR_QTY: {
      return {
        ...state,
        cart: (state.cart = []),
        isLoading: false,
        isError: false,
      };
    }
    case data.GET_CART_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_CART_S: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: payload,
      };
    }
    case data.GET_CART_F: {
      return {
        ...state,
        isError: true,
      };
    }
    case data.CLEAR_CART: {
      console.log("CLEAR_CART------", payload);
      customers
        .doc(payload)
        .collection("cart")
        .get()
        .then((res) => {
          res.docs.map((item) =>
            customers.doc(payload).collection("cart").doc(item.id).delete()
          );
        })
        .catch((err) => console.log("errr", err));
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
};
export { cartReducer };
