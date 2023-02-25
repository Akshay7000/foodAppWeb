import { customers, orders } from "../../Firebase/Collection";
import * as data from "./actionType";

const init = {
  orders: [],
  isLoading: false,
  isError: false,
};
const orderReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case data.CREATE_ORDER_F: {
      return { ...state, isLoading: false, isError: true };
    }
    case data.CREATE_ORDER_S: {
      return {
        ...state,

        isLoading: false,
        isError: false,
      };
    }
    case data.GET_ORDER_R: {
      return { ...state, isLoading: true, isError: false };
    }
    case data.GET_ORDER_F: {
      return { ...state, isLoading: false, isError: true };
    }
    case data.GET_ORDER_S: {
      return {
        ...state,
        orders: payload,
        isLoading: false,
        isError: false,
      };
    }
    case data.GET_ORDER_R: {
      return { ...state, isLoading: true, isError: false };
    }

    default:
      return state;
  }
};
export { orderReducer };
